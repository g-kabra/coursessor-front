import Link from "next/link";
import Image from "next/image";
import Head from "next/head"
import Navbar from "../../../../components/Navbar";
import Layout from "../../../../components/Layout";
import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";
import PostHeader from "../../../../components/PostHeader";
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
                <title>Coursessor Blog - De la învățat mecanic la gândire critică</title>
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
                    src="https://coursessor.s3.eu-central-1.amazonaws.com/pexels-tima-miroshnichenko-6550419.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex items-center justify-start hero w-auto h-4/6">
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Educația si importanța ei</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>




            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                Educația reprezintă un aspect crucial al vieții noastre. Este procesul de dobândire a cunoștințelor, abilităților, valorilor și atitudinilor necesare pentru creșterea, dezvoltarea și succesul personal. Educația nu se limitează la sala de clasă, ci cuprinde toate aspectele vieții.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                Ea ne echipează cu abilități de gândire critică, abilități de rezolvare a problemelor și capacitatea de a lua decizii informate. Educația este esențială pentru o carieră de succes și o viață împlinită.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                Educația este, de asemenea, un drept fundamental al omului. Toată lumea ar trebui să aibă acces la o educație de calitate. Educația este esențială pentru reducerea sărăciei, promovarea dezvoltării durabile și obținerea unei calități mai bune a vieții.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10">
                În lumea de astăzi, educația a devenit mai importantă ca niciodată. Abilitățile necesare pentru a reuși la locul de muncă evoluează constant, iar educația joacă un rol esențial în dobândirea acestora.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10">
                În concluzie, educația este o parte esențială a vieții noastre. Ne oferă cunoștințele și abilitățile necesare pentru succesul profesional. Educația este un drept al omului care ar trebui să fie accesibil tuturor și este crucială pentru a crea un viitor mai bun pentru noi înșine și pentru generațiile viitoare.
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


