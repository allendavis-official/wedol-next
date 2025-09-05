import {
  ShieldCheck,
  HeartHandshake,
  Landmark,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          About Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Who We Are
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Based in Weala, Cinta Township (Margibi County), WEDOL builds peace,
          promotes women’s rights, and creates opportunities for women and girls
          to thrive.
        </p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" /> Vision
            </h3>
            <p className="mt-2 text-gray-600">
              A society where women and children live free from violence, abuse,
              and discrimination—with dignity and equality.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <Landmark className="h-5 w-5" /> Mission
            </h3>
            <p className="mt-2 text-gray-600">
              To empower disadvantaged women and girls through advocacy,
              education, peacebuilding, and livelihood development.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5" /> Core Values
            </h3>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Accountability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Transparency
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Integrity
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900">Our Story</h3>
            <p className="mt-2 text-gray-600">
              Founded in October 2012 as a community-based organization, WEDOL
              has grown into a trusted partner delivering impactful projects
              across Liberia.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900">Where We Work</h3>
            <p className="mt-2 text-gray-600">
              Primary base in Margibi County with activities in communities such
              as Weala, Gibi and Kakata, and collaborations across Liberia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
