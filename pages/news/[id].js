import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import newsItems from "../../data/newsData";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the news item
  const item = newsItems.find((n) => n.id === id);

  // Handle loading state
  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Handle not found
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Article Not Found
          </h1>
          <Link
            href="/#news"
            className="mt-4 inline-block text-emerald-700 font-semibold"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#news"
            className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 mb-6"
          >
            ← Back to News
          </Link>

          <p className="text-sm font-semibold text-emerald-600 uppercase">
            {item.category} • {item.date}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
            {item.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Body Text */}
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />

        {/* Image Gallery */}
        {item.images && item.images.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Gallery</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {item.images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-xl overflow-hidden bg-gray-200"
                >
                  <Image
                    src={src}
                    alt={`${item.title} - Image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/#news"
            className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
          >
            ← Back to all news
          </Link>
        </div>
      </article>
    </main>
  );
}

// Generate static paths for all news items
export async function getStaticPaths() {
  const paths = newsItems.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Get static props for each page
export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
