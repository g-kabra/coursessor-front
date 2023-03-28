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
                <title>Coursessor Blog - Profesorul modern</title>
                <meta name="language" content="ro" />
                <meta name="geo.region" content="RO" />
                <meta name="geo.placename" content="București" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="description" content="Relația dintre profesori si elevii lor s-a schimbat atât de mult încât din simplii dascăli profesorii au devenit adevărate modele pentru elevii lor." />
                <meta name="author" content="Coursessor" />
                <meta name="date" content="2023-03-14" />
                <meta name="dateModified" content="2023-03-14" />
                <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
                <meta name="category" content="educație" />
                <meta property="og:title" content="Coursessor Blog - Profesorul modern" />
                <meta property="og:description" content="Relația dintre profesori si elevii lor s-a schimbat atât de mult încât din simplii dascăli profesorii au devenit adevărate modele pentru elevii lor." />
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
                    src="https://cdn-videos.coursessor.com/pexels-marina-zasorina-7601710.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex items-center justify-start hero w-auto h-4/6">
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Profesorul modern</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>


            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                    Profesorii stau la baza oricărei  instituții de învățământ. Ei  joacă un rol vital în viaţa studenților . Profesorii își dedică timpul și experiența penru a-i invăța pe  studenți și se angajează să-i ajute  să-și atingă potențialul maxim.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Profesorii se pricep să elaboreze  și să predea  lecții eficiente care îi ajută pe elevi să învețe și să înțeleagă concepte noi. Ei folosesc o varietate de metode de predare adaptate stilului de învățare al fiecarui elev  și sunt mereu în căutarea unor noi modalități de a-și îmbunătăți metodele de predare. Pe lângă predare, profesorii servesc și ca mentori pentru elevii lor.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Ei insuflă valori precum integritatea, respectul și munca grea. De asemenea, oferă sprijin emoțional și psihologic studenților care au probleme personale. Fără profesori, lumea ar fi  mult mai puțin educată.  Profesorii au un impact profund asupra vieții elevilor, iar influența lor  are un impact profund asupra vietii elevilor . A fi profesor este mai mult decât o slujbă, este o vocație. Este nevoie de răbdare, dăruire și muncă asiduă. Profesorii sunt eroi  care merită respectul și aprecierea noastră pentru eforturile lor neobosite de a modela viitorul societății.
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

