import { Users, HeartHandshake, HandHeart } from "lucide-react";

export default function GetInvolved() {
  const items = [
    {
      title: "Volunteer",
      text: "Share your skills and time to support community programs.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Partner With Us",
      text: "Collaborate with WEDOL to scale empowerment and peacebuilding.",
      icon: <HeartHandshake className="h-6 w-6" />,
    },
    {
      title: "Donate",
      text: "Your support helps us reach more women, girls, and communities.",
      icon: <HandHeart className="h-6 w-6" />,
    },
  ];

  return (
    <section id="involved" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Join Us in Making a Difference
        </h2>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-content-center mb-4">
                {it.icon}
              </div>
              <h4 className="font-semibold text-gray-900">{it.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{it.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
