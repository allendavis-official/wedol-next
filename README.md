🌍 WEDOL Website

This is the official website for the Women Education and Development Organization of Liberia (WEDOL), built with Next.js and Tailwind CSS.

The site showcases WEDOL’s mission, vision, programs, and projects, with a modern, mobile-friendly design.

🚀 Tech Stack

Next.js
 – React framework for production

Tailwind CSS
 – Utility-first CSS for styling

Lucide React
 – Icons

Vercel
 – Hosting & deployment

 📂 Project Structure
├── components/        # Reusable UI components (Navbar, Footer, etc.)
├── sections/          # Homepage sections (Hero, About, Programs, etc.)
├── pages/             # Next.js pages
│   ├── _app.js        # Global app wrapper
│   └── index.js       # Homepage
├── public/            # Static assets (images, logos, icons)
├── styles/            # Global styles
├── .gitignore         # Ignored files
├── README.md          # Project documentation
└── package.json       # Dependencies & scripts

🛠️ Getting Started
1. Clone the repo
git clone https://github.com/your-username/wedol-next.git
cd wedol-next

2. Install dependencies
npm install

3. Run the development server
npm run dev


Then open http://localhost:3000
 in your browser.

4. Build for production
npm run build
npm start

🌐 Deployment

The project is deployed on Vercel
.

To deploy your own:

Push this repo to GitHub.

Import it into Vercel.

Configure environment variables if needed (e.g., contact form).

Deploy 🚀

📧 Contact Form

Currently set up with Formspree for demo purposes.
Can be switched to Nodemailer (custom email) upon request.

🖌️ Branding & Content

Replace placeholder images in /public/ with WEDOL’s official photos.

Update colors in tailwind.config.js when WEDOL provides their official palette.

Swap in partner logos under /public/partners/.

📞 Contact

For questions or collaboration:

WEDOL
📍 Weala, Cinta Township, Margibi County, Liberia
📧 wedolcso@gmail.com
