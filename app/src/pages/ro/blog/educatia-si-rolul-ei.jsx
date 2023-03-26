import Link from "next/link";
import Image from "next/image";
import Head from "next/head"
import Navbar from "../../../../components/Navbar";
import Layout from "../../../../components/Layout";
import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";
import Footer from "../../../../components/Footer";
import GTag from "../../../../components/gtag";


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
                <GTag
                    measurementId="G-GWMRVJ2DK8"
                    transportUrl="https://measure.coursessor.com"
                    firstPartyCollection={true}
                />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="theme-color" content="#121212" />
                <title>Coursessor Blog - Educația și rolul ei</title>
                <meta name="language" content="ro" />
                <meta name="geo.region" content="RO" />
                <meta name="geo.placename" content="București" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="description" content="Rolul educației indiferent este extrem de important în viața noastră, indiferent de care tip de educație este vorba." />
                <meta name="author" content="Coursessor" />
                <meta name="date" content="2023-03-14" />
                <meta name="dateModified" content="2023-03-14" />
                <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
                <meta name="category" content="educație" />
                <meta property="og:title" content="Coursessor Blog - Educația și rolul ei" />
                <meta property="og:description" content="Rolul educației indiferent este extrem de important în viața noastră, indiferent de care tip de educație este vorba." />
                <meta property="og:image" content="https://coursessor.s3.eu-central-1.amazonaws.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
                <meta property="og:url" content="https://coursessor.com/ro/blog/educatia-si-rolul-ei" />
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
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Educația și rolul ei</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>


            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                    Educația este procesul de dobândire a cunoștințelor, abilităților, valorilor, credințelor și obiceiurilor in diferite moduri , cum ar fi școlarizarea formală sau  învățarea informală  .Educația joacă un rol vital în modelarea viitorului indivizilor și al societății în ansamblu. Este  baza creșterii personale și profesionale, mobilității sociale și dezvoltării economice.


                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Educația formală, oferită de obicei de școli și universități, este mijlocul principal de educare a unui număr mare de oameni. Oferă un mediu de învățare structurat și standardizat care permite indivizilor să dobândească cunoștințe și abilități într-o serie de discipline, inclusiv matematică, știință, limbă și istorie. Educația formală insuflă, de asemenea, valori precum disciplina, responsabilitatea și munca în echipă, care sunt esențiale pentru succesul în viață.
                    Educația informală, cum ar fi învățarea de la familie, prieteni și membri ai comunității, poate juca, de asemenea, un rol semnificativ în modelarea convingerilor, atitudinilor și comportamentelor indivizilor. Studiul de sine, prin lectură, cercetare și alte mijloace, poate fi, de asemenea, un instrument puternic pentru dezvoltarea personală și profesională.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Pe lângă transmiterea de cunoștințe și abilități, educația are câteva alte funcții importante. Încurajează gândirea critică, creativitatea și abilitățile de rezolvare a problemelor, care sunt esențiale pentru succesul în lumea de astăzi în schimbare rapidă. De asemenea, promovează coeziunea și înțelegerea socială prin expunerea indivizilor la diverse culturi, idei și perspective.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    În ciuda importanței sale, accesul la educație nu este egal în întreaga lume. Mulți indivizi, în special cei din țările în curs de dezvoltare, nu au acces la educație de calitate din cauza unor factori precum sărăcia, discriminarea de gen și infrastructura inadecvată. Abordarea acestor provocări și asigurarea faptului că toată lumea are acces la o educație de calitate este esențială pentru promovarea justiției sociale și a dezvoltării economice.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    În concluzie, educația este o componentă crucială a dezvoltării personale și societale. Oferă indivizilor cunoștințele, abilitățile și valorile necesare pentru succesul în viață și joacă un rol vital în promovarea mobilității sociale si dezvoltării economice .Investind în educație și promovând accesul egal la educație de calitate pentru toți, putem crea o lume mai echitabilă și mai prosperă pentru toată lumea.
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
