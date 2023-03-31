import Navbar from "../../../../components/Navbar"
import Head from "next/head"
import { useState, useEffect, useRef } from "react";
import Footer from "../../../../components/Footer";
import BlogCard from "../../../../components/BlogCard";

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default();
        sr.reveal('.fade', { duration: 1000 });
      });
    }
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const navbarOffset = navbarRef.current?.offsetTop || 55;
      setIsScrolled(scrollTop > navbarOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#000000" />
        <title>Coursessor Blog - Articole utile despre educație și tehnologie</title>
        <meta name="language" content="ro" />
        <meta name="geo.region" content="RO" />
        <meta name="geo.placename" content="București" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="description" content="Coursessor Blog este un loc unde găsiți cele mai recente știri și articole despre tehnologie în educație, cu un accent pe dezvoltarea personală și profesională." />
        <meta name="author" content="Coursessor" />
        <meta name="date" content="2023-03-14" />
        <meta name="dateModified" content="2023-03-14" />
        <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
        <meta name="category" content="educație" />
        <meta property="og:title" content="Coursessor Blog - Articole utile despre educație și tehnologie" />
        <meta property="og:description" content="Coursessor Blog este un loc unde găsiți cele mai recente știri și articole despre tehnologie în educație, cu un accent pe dezvoltarea personală și profesională." />
        <meta property="og:image" content="https://cdn-images.coursessor.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
        <meta property="og:url" content="https://coursessor.com/ro/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coursessor" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>


      <header className="relative overflow-hidden w-screen h-72 scroll-smooth">
        <video
          src="https://cdn-videos.coursessor.com/pexels-tima-miroshnichenko-6550419.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="w-full h-full justify-center items-center backdrop-brightness-75">
          <section className="flex items-center justify-center hero w-auto h-4/6">
            <h1 className="headerh1home text-6xl mg:text-4xl  font-satoshi p-5 text-white font-[500] mt-20">Blog</h1>
          </section>
        </div>
        <Navbar ref={navbarRef} isScrolled={isScrolled} />
      </header>





      <BlogCard imageSrc={"https://coursessor.imgix.net/3d-render-abstract-background-with-brain-that-surrounded-with-particles-with-twisted-trails-trails-particles-are-symoizing-ideas.jpg?loseless=true&auto=format"} alt={"brain"} headline={"De la învățat mecanic la gândire critică"} description={"Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea critică și imaginația elevilor, la activitatea complexă din zilele noastre."} href={"/ro/blog/de-la-invatat-mecanic-la-gandire-critica"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/man-opened-magic-book-with-growing-lights-magic-powder-learning-education-concept.jpg?loseless=true&auto=format"} alt={"man holding a book"} headline={"Profesorul modern"} description={"Relația dintre profesori și elevii lor s-a schimbat atât de mult încât din simplii dascăli profesorii au devenit adevărate modele pentru elevii lor."} href={"/ro/blog/profesorul-modern"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/front-view-stacked-books-ladders-education-day (1).jpg?loseless=true&auto=format"} alt={"books and ladder"} headline={"Educația și importanța ei"} description={"Din cele mai vechi timpuri scopul educației a fost să pregătească generațiile viitoare."} href={"/ro/blog/educatia-si-importanta-ei"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/person-holding-light-bulb-with-graduation-cap.jpg?loseless=true&auto=format"} alt={"bulb"} headline={"Gândirea critică"} description={"Ce este și cum o putem folosi"} href={"/ro/blog/gandirea-critica"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/1586193_11831.jpg?loseless=true&auto=format"} alt={"projection"} headline={"Inteligența în viața noastră"} description={"Ce înseamnă să fii inteligent și cum îți poți dezvolta inteligența"} href={"/ro/blog/inteligenta-in-viata-noastra"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/bw-greek-statue-image-torn-paper-style-remixed-media (1).jpg?loseless=true&auto=format"} alt={"imagination"} headline={"Imaginația în viața noastră"} description={"Imaginația este un dar pe care toți oamenii îl au atunci când se nasc însă din nefericire unii dintre noi îl pierd."} href={"/ro/blog/imaginatia-in-viata-noastra"} />

      <BlogCard imageSrc={"https://coursessor.imgix.net/graduation-take-black-yellow-tassel-front-bokeh-blurry-background (1).jpg?loseless=true&auto=format"} alt={"graduation"} headline={"Educația și rolul ei"} description={"Rolul educației indiferent este extrem de important în viața noastră, indiferent de care tip de educație este vorba."} href={"/ro/blog/educatia-si-rolul-ei"} />


      <Footer />
    </>
  )
}