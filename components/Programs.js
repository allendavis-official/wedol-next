import {
  ShieldCheck,
  Users,
  HandHeart,
  HeartHandshake,
  Leaf,
} from "lucide-react";

export default function Programs() {
  const items = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Women’s Rights Advocacy",
      text: "Promoting equality, justice, and inclusion through awareness, policy engagement and grassroots campaigns.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Empowerment & Education",
      text: "Building capacity via training, mentorship, and education—giving women tools to lead and thrive.",
    },
    {
      icon: <HandHeart className="h-6 w-6" />,
      title: "Peacebuilding",
      text: "Supporting women as mediators and community peacebuilders, fostering dialogue and reducing conflict.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Livelihood & Skills Training",
      text: "Vocational training and village savings groups (VSLAs) to create financial independence.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Agriculture & Food Security",
      text: "Encouraging women’s participation in agriculture as a pathway to self-reliance and growth.",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Programs & Focus Areas
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          What We Do
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Our programs are designed to empower women and girls, strengthen
          communities, and build lasting peace.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-content-center mb-4">
                {it.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.text}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-emerald-700 font-semibold"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
