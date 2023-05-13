import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "@/components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>TMR Atelier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/../assets/logo_transparent.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
