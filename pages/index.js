import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Projects from "../components/Projects";
import Partners from "../components/Partners";
import GetInvolved from "../components/GetInvolved";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          WEDOL — Women Education and Development Organization of Liberia
        </title>
        <meta
          name="description"
          content="WEDOL empowers women and girls in Liberia through advocacy, peacebuilding, and livelihood programs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Projects />
          <Partners />
          <GetInvolved />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
