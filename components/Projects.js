export default function Projects() {
  const past = [
    {
      title: "Ebola Crisis Response (2014–2015)",
      text: "Community awareness, public health assessments, and distribution of preventive materials across Margibi County.",
    },
    {
      title: "Women in Politics (2017–2018)",
      text: "Voter education and leadership training encouraging women’s participation in elections and leadership.",
    },
    {
      title: "Land Rights Advocacy (2018)",
      text: "Campaigns for women’s rights to own and manage land in Margibi County.",
    },
    {
      title: "COVID-19 Response (2020)",
      text: "Distribution of food/non-food items and peacebuilding initiatives with women leaders.",
    },
  ];
  const ongoing = [
    {
      title: "Peacebuilding & Women’s Agency (2022–2023)",
      text: "Strengthening young women’s role in peacebuilding and land rights with ActionAid Liberia.",
    },
    {
      title: "Village Savings & Skills Training (2022–Present)",
      text: "Economic empowerment of vulnerable women and girls with P4DP (VSLAs & mother clubs).",
    },
    {
      title: "Ending FGM (2023–Present)",
      text: "Advocacy and awareness in Margibi County with WONGOSOL.",
    },
  ];

  const Card = ({ item }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-gray-900">{item.title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
      <a
        href="#contact"
        className="mt-4 inline-block text-emerald-700 font-semibold"
      >
        Read more
      </a>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Projects & Impact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Our Work in Action
        </h2>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Past Projects</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {past.map((p) => (
                <Card key={p.title} item={p} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Ongoing Projects
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {ongoing.map((p) => (
                <Card key={p.title} item={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
