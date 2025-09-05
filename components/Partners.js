export default function Partners() {
  const logos = [
    "UNMIL",
    "ICAN",
    "ActionAid Liberia",
    "P4DP",
    "Accountability Lab",
    "WONGOSOL",
  ];
  return (
    <section id="partners" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Partners & Donors
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          We Build Through Collaboration
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Our work is made possible by collaboration with national and
          international partners.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm grid place-content-center text-center"
            >
              <span className="text-sm font-semibold text-gray-700">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
