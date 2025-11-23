import Image from "next/image";
import Link from "next/link";
import newsItems from "../data/newsData";

export default function News() {
  // Show only the 6 most recent items
  const recentPosts = newsItems.slice(0, 6);

  return (
    <section id="news" className="py-20 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          News & Updates
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Latest from WEDOL
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image thumbnail */}
              {p.images && p.images.length > 0 && (
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={p.images[0]}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <p className="text-xs font-semibold text-emerald-700">
                  {p.date}
                </p>
                <h4 className="mt-1 font-semibold text-gray-900">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <Link
                  href={`/news/${p.id}`}
                  className="mt-3 inline-block text-emerald-700 font-semibold hover:text-emerald-800"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
