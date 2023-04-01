import Link from "next/link";
import Image from "next/image";
import Head from "next/head"
import Navbar from "../../../../components/Navbar";
import { useState, useEffect, useRef } from "react";
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
                <meta name="theme-color" content="#000000" />
                <title>Coursessor Blog - Gândirea critică</title>
                <meta name="language" content="ro" />
                <meta name="geo.region" content="RO" />
                <meta name="geo.placename" content="București" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="description" content="Ce este și cum o putem folosi" />
                <meta name="author" content="Coursessor" />
                <meta name="date" content="2023-03-14" />
                <meta name="dateModified" content="2023-03-14" />
                <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
                <meta name="category" content="educație" />
                <meta property="og:title" content="Coursessor Blog - Gândirea critică" />
                <meta property="og:description" content="Ce este și cum o putem folosi" />
                <meta property="og:image" content="https://cdn-images.coursessor.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
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
                    src="https://coursessorpublic.blob.core.windows.net/videoscontainer/pexels-marina-zasorina-7601710.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex items-center justify-start hero w-auto h-4/6">
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Gândirea critică</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>


            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                    Gândirea critică este o abilitate importantă care reprezintă capacitatea de a analiza și evalua informațiile într-un mod atent și sistematic. Ea reprezinta analizarea ipotezelor, luarea în considerare a diferitelor perspective și utilizarea dovezilor pentru a lua  decizii motivate.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    În lumea de astăzi, în care suntem bombardați în mod constant cu informații dintr-o varietate de surse, gândirea critică a devenit din ce în ce mai importantă. Capacitatea de a separa faptele de ficțiune, de a evalua credibilitatea surselor și de a lua decizii în cunoștință de cauză este esențială pentru a  face alegeri corecte.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Gândirea critică este o abilitate importantă care reprezintă capacitatea de a analiza și evalua informațiile într-un mod atent și sistematic. Ea reprezintă analizarea ipotezelor, luarea în considerare a diferitelor perspective și utilizarea dovezilor pentru a lua decizii motivate.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    În lumea de astăzi, în care suntem bombardați în mod constant cu informații dintr-o varietate de surse, gândirea critică a devenit din ce în ce mai importantă. Capacitatea de a separa faptele de ficțiune, de a evalua credibilitatea surselor și de a lua decizii în cunoștință de cauză este esențială pentru a face alegeri corecte.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Gândirea critică nu înseamnă a pune la îndoială totul. Insemna de asemenea   a fi deschis la minte și a fi dispus să iei în considerare diferite perspective și idei.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Dezvoltarea abilităților de gândire critică necesită timp și practică. Aceasta implică adresarea de întrebări, strângerea și evaluarea dovezilor, luarea în considerare a diferitelor puncte de vedere și cântărirea avantajelor și dezavantajelor diferitelor opțiuni.
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
