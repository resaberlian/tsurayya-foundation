
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.tsurayyafoundation.org";

type NewsItem = {
  slug: string;
  updated_at: string | null;
  published_at: string | null;
};

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Halaman utama website
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/programs`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/impact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/news`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gabung`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Ambil berita yang sudah dipublikasikan dari Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return staticPages;
  }

  try {
    const apiUrl = new URL("/rest/v1/news", supabaseUrl);

    apiUrl.searchParams.set(
      "select",
      "slug,updated_at,published_at"
    );
    apiUrl.searchParams.set("is_published", "eq.true");
    apiUrl.searchParams.set("order", "published_at.desc");

    const response = await fetch(apiUrl.toString(), {
      headers: {
        apikey: supabaseKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Gagal mengambil berita untuk sitemap");
      return staticPages;
    }

    const news: NewsItem[] = await response.json();

    const newsPages: MetadataRoute.Sitemap = news.map((item) => ({
      url: `${BASE_URL}/news/${item.slug}`,
      ...(item.updated_at || item.published_at
        ? {
            lastModified: new Date(
              item.updated_at || item.published_at!
            ),
          }
        : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticPages, ...newsPages];
  } catch (error) {
    console.error("Sitemap error:", error);
    return staticPages;
  }
}
