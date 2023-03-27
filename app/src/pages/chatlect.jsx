import Navbar from "../../components/Navbar";
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react";

export default function Chatlect() {

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
        <title>Chatlect</title>
        <meta name="language" content="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="description" content="Coursessor Chatlect, advanced teacher model built on our custom deep learning model and GPT4" />
        <meta name="author" content="Coursessor" />
        <meta name="date" content="2023-03-22" />
        <meta name="dateModified" content="2023-03-22" />
        <meta name="keywords" content="education, technology, AI, chatbot" />
        <meta name="category" content="education" />
        <meta property="og:title" content="Coursessor Chatlect | AI teacher chatbot" />
        <meta property="og:description" content="Coursessor Blog este un loc unde găsiți cele mai recente știri și articole despre tehnologie în educație, cu un accent pe dezvoltarea personală și profesională." />
        <meta property="og:image" content="https://coursessor.s3.eu-central-1.amazonaws.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
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
                src="https://coursessor.s3.eu-central-1.amazonaws.com/connection-113368.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex flex-col items-end mg:items-start justify-center hero w-auto h-4/6">
                        <h1 className="headerh1chatlect text-8xl mg:text-6xl  font-satoshi p-5 text-white font-[500] mt-20">Introducing</h1>
                        <Image src={"https://coursessor.s3.eu-central-1.amazonaws.com/chatlectlogowhite.png"} width={350} height={350} alt="chatlect logo" className="mr-20 mg:ml-6 animate-pulse" />
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} showToggleDarkMode={true}/>
        </header>

    </>
  )
}