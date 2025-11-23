// data/newsData.js

const newsItems = [
  {
    id: "farewell-christine-sajery",
    title: "Farewell Program Honoring Christine B. Sajery",
    date: "Nov 23, 2025",
    category: "Organizational Event",
    program: null, // Internal event, not tied to a specific program
    excerpt:
      "WEDOL held a heartfelt farewell program for our former Program Officer, Christine B. Sajery...",
    body: `The Women Education and Development Organization of Liberia (WEDOL) held a heartfelt farewell program for our former Program Officer, <strong>Christine B. Sajery</strong>. Christine is a dedicated and hardworking young woman whose passion for women's empowerment, peacebuilding, and community transformation made a lasting impact on the organization.

Her leadership, vision, and commitment brought joy and tears as the Executive Director and project team celebrated her contributions to WEDOL's mission. We honor her for supporting the mission, vision, goals, and objectives of WEDOL, and for consistently encouraging women and girls to engage in positive initiatives that reduce violence and discrimination in their communities.`,
    images: [
      "/images/news/farewell-christine-1.jpg",
      "/images/news/farewell-christine-2.jpg",
    ],
  },
  {
    id: "life-skills-distribution-nov-2025",
    title: "Life Skills Training & Empowerment Materials Distributed",
    date: "Nov 7, 2025",
    category: "Economic Empowerment",
    program: "empowerment", // Maps to Empowerment & Education
    excerpt:
      "Graduates received soap-making materials, protective gear, and tools to start income-generating activities...",
    body: `Graduates of WEDOL's life skills and economic empowerment programs received essential starter kits including soap-making materials, protective equipment, chemicals, essential oils, and tools. This initiative supports women in launching sustainable income-generating activities and strengthening their financial independence.`,
    images: [
      "/images/news/life-skills-distribution-1.jpg",
      "/images/news/life-skills-distribution-2.jpg",
    ],
  },
  {
    id: "untrustfund-wongosol-support",
    title: "UN Trust Fund & WONGOSOL Support Women in Margibi",
    date: "Nov 5, 2025",
    category: "Partners Support",
    program: "livelihood", // Maps to Livelihood & Skills Training
    excerpt:
      "Business starter kits were delivered to women coalitions in Kakata to boost economic independence...",
    body: `Through partnership with <strong>WONGOSOL</strong> and support from the <strong>United Nations Trust Fund</strong>, WEDOL provided life skills training materials and business starter kits to women beneficiaries in Kakata, Margibi County. The donation equips women with the tools needed for soap production and other small enterprises, contributing to economic independence and reducing vulnerability.`,
    images: [
      "/images/news/untrustfund-wongosol-1.jpg",
      "/images/news/untrustfund-wongosol-2.jpg",
    ],
  },
  {
    id: "peacebuilding-agriculture-training",
    title: "Peacebuilding & Smart Agriculture Training for 25 Women",
    date: "Nov 2025",
    category: "Smart Agriculture",
    program: "agriculture", // Maps to Agriculture & Food Security
    excerpt:
      "Women farmers received training in climate-smart agriculture combined with peacebuilding tools...",
    body: `WEDOL trained over 25 women farmers in Margibi County in Smart Agriculture practices combined with peacebuilding skills. The program strengthens food security while empowering women as agents of peace within their communities.`,
    images: [
      "/images/news/agriculture-training-1.jpg",
      "/images/news/agriculture-training-2.jpg",
    ],
  },
  {
    id: "wps-25th-anniversary",
    title: "Women, Peace & Security @25 Celebrated in Liberia",
    date: "Oct 30, 2025",
    category: "Peace & Security",
    program: "advocacy", // Maps to Women's Rights Advocacy
    excerpt:
      "WEDOL joined the global community in celebrating 25 years of the WPS Agenda at Paynesville Town Hall...",
    body: `WEDOL joined the global community to celebrate 25 years of the Women, Peace, and Security (WPS) Agenda. The event highlighted progress in promoting women's participation in peace and governance, while emphasizing the continuous need for collaboration to build an inclusive and peaceful society.`,
    images: [
      "/images/news/wps-anniversary-1.jpg",
      "/images/news/wps-anniversary-2.jpg",
      "/images/news/wps-anniversary-banner.jpg",
    ],
  },
  {
    id: "women-coalitions-materials",
    title: "Materials Distributed to Three Women Coalitions",
    date: "Nov 2025",
    category: "Economic Empowerment",
    program: "livelihood", // Maps to Livelihood & Skills Training
    excerpt:
      "Caustic soda, essential oils, foaming agents, protective gear and business materials were provided...",
    body: `WEDOL, in partnership with WONGOSOL and the UN Trust Fund, distributed caustic soda, essential oils, foaming agents, base gel, protective gear, gloves, tubs, buckets, and other materials to empower women in producing marketable goods such as soap and detergents.

The distribution aims to combat harmful traditional practices and prevent youth-led violence against women and girls by enabling women's economic stability. Materials were delivered to:
<ul>
<li>Weala Women Coalition</li>
<li>Buzzi Quarter Women Coalition</li>
<li>Francis Lewis Farm Women Coalition</li>
</ul>`,
    images: [
      "/images/news/coalitions-distribution-1.jpg",
      "/images/news/coalitions-distribution-2.jpg",
    ],
  },
  {
    id: "gender-sensitivity-training-men",
    title: "15 Men Trained in Gender Sensitivity & Peacebuilding",
    date: "Nov 7, 2025",
    category: "Peace & Security",
    program: "peacebuilding", // Maps to Peacebuilding
    excerpt:
      "Male community dwellers in Weala received one-day training to address harmful norms and reduce violence...",
    body: `To promote inclusive community transformation, WEDOL conducted a one-day training for 15 male community dwellers in Weala. The workshop focused on addressing harmful traditional norms, reducing violence, and fostering positive male involvement in preventing violence against women and girls.`,
    images: [
      "/images/news/men-gender-training-1.jpg",
      "/images/news/men-gender-training-2.jpg",
    ],
  },
];

export default newsItems;
