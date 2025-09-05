import { Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Since 2012
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Empowering Women. Building Peace. Transforming Communities.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            WEDOL is a grassroots women-led nonprofit in Liberia. We empower
            women, girls, and vulnerable children through education, advocacy,
            peacebuilding, and livelihood development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700"
            >
              Learn More
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Our Programs
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-gray-900">10+</p>
              <p className="text-sm text-gray-600">Years of Impact</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-gray-900">7+</p>
              <p className="text-sm text-gray-600">Major Projects</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-gray-900">
                Local + Intl
              </p>
              <p className="text-sm text-gray-600">Partnerships</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-1 shadow-inner">
            <div className="h-full w-full rounded-[22px] bg-white grid place-content-center">
              <div className="flex flex-col items-center text-center p-8">
                <Users className="h-14 w-14" />
                <p className="mt-4 text-xl font-semibold text-gray-900">
                  Women • Girls • Communities
                </p>
                <p className="mt-2 max-w-sm text-gray-600">
                  Replace with real photos (workshops, trainings, VSLA groups,
                  etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
