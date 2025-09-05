export default function News() {
  const posts = [
    {
      title: "Community Dialogue in Margibi",
      date: "Aug 12, 2025",
      excerpt: "WEDOL facilitated a women-led dialogue on peace and inclusion…",
    },
    {
      title: "VSLA Training for 5 Communities",
      date: "Jul 3, 2025",
      excerpt: "35 women completed savings & financial literacy sessions…",
    },
  ];

  return (
    <section id="news" className="py-20 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          News & Updates
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Latest from WEDOL
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold text-emerald-700">{p.date}</p>
              <h4 className="mt-1 font-semibold text-gray-900">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <a
                href="#"
                className="mt-3 inline-block text-emerald-700 font-semibold"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
