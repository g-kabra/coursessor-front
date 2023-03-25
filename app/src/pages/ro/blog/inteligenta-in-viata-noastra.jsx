import Link from "next/link";
import Image from "next/image";
import Head from "next/head"
import Navbar from "../../../../components/Navbar";
import Layout from "../../../../components/Layout";
import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";
import Footer from "../../../../components/Footer";



export default function Page() {

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
                <meta name="theme-color" content="#121212" />
                <title>Coursessor Blog - Inteligența în viața noastră</title>
                <meta name="language" content="ro" />
                <meta name="geo.region" content="RO" />
                <meta name="geo.placename" content="București" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="description" content="Ce înseamnă să fii inteligent și cum îți poți dezvolta inteligența" />
                <meta name="author" content="Coursessor" />
                <meta name="date" content="2023-03-14" />
                <meta name="dateModified" content="2023-03-14" />
                <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
                <meta name="category" content="educație" />
                <meta property="og:title" content="Coursessor Blog - Inteligența în viața noastră" />
                <meta property="og:description" content="Ce înseamnă să fii inteligent și cum îți poți dezvolta inteligența" />
                <meta property="og:image" content="https://coursessor.s3.eu-central-1.amazonaws.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
                <meta property="og:url" content="https://coursessor.com/ro/blog/inteligenta-in-viata-noastra" />
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
                    src="https://coursessor.s3.eu-central-1.amazonaws.com/pexels-marina-zasorina-7601710.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex items-center justify-start hero w-auto h-4/6">
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Inteligența în viața noastră</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>


            <div className="content flex flex-col p-5 mt-5">
                <p  className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                Inteligența este un concept complex care a fost studiat și dezbătut de savanți și oameni de știință de secole. Deși nu există o singură definiție a inteligenței care să fie universal acceptată, prin inteligența majorității oamenilor înțeleg capacitatea unei persoane de a învăța, înțelege și aplica cunoștințe și abilități într-o varietate de contexte. 

                </p>
                <p  className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                Există multe tipuri diferite de inteligență, inclusiv inteligență logico-matematică, lingvistică, spațială și muzicală. Fiecare dintre aceste tipuri de inteligență implică abilități diferite, iar oamenii pot excela într-una sau mai multe domenii, în funcție de punctele lor forte și de interesele lor individuale. 
                </p>
                <p  className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                În timp ce inteligența este adesea considerată o trăsătură cu care se naște o persoană, cercetările au arătat că poate fi dezvoltată și îmbunătățită prin învățare și practică. De exemplu, studiile au arătat că activități precum cititul și rezolvarea puzzle-urilor pot ajuta la îmbunătățirea abilităților cognitive și a inteligenței.
                </p>
                <p  className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                Inteligența este, de asemenea, strâns legată de alți factori precum creativitatea, capacitatea de rezolvare a problemelor și inteligența emoțională. Aceste abilități pot fi dezvoltate prin educație și experiență de viață și sunt esențiale pentru succesul în viață.
                </p>
                <p  className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                În concluzie, inteligența este un concept complex și dinamic care cuprinde o gamă largă de aptitudini și abilități. Deși poate fi influențată de genetică, poate fi, de asemenea, dezvoltată și îmbunătățită prin învățare, practică și experiență de viață. Înțelegerea și cultivarea propriei noastre inteligențe unice ne poate ajuta să ne atingem obiectivele.
                </p>
            </div>

            <div className="authorName p-5">
                <p className="font-satoshi text-xl mg:text-xl tracking-tight mt-10">
                    Autor: Adrian Florin
                </p>
            </div>


        <Footer />

        </>

    )
}

