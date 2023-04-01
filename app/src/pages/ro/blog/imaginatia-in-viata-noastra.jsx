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
                <title>Coursessor Blog - Imaginația în viața noastră</title>
                <meta name="language" content="ro" />
                <meta name="geo.region" content="RO" />
                <meta name="geo.placename" content="București" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="description" content="Imaginația este un dar pe care toți oamenii îl au atunci când se nasc însă din nefericire unii dintre noi îl pierd." />
                <meta name="author" content="Coursessor" />
                <meta name="date" content="2023-03-14" />
                <meta name="dateModified" content="2023-03-14" />
                <meta name="keywords" content="educație, tehnologie, dezvoltare personală, dezvoltare profesională" />
                <meta name="category" content="educație" />
                <meta property="og:title" content="Coursessor Blog - Imaginația în viața noastră" />
                <meta property="og:description" content="Imaginația este un dar pe care toți oamenii îl au atunci când se nasc însă din nefericire unii dintre noi îl pierd." />
                <meta property="og:image" content="https://cdn-images.coursessor.com/serious-experienced-businesspeople-wearing-casual-formal-wear-discussing-preparing-law-case-contract-tender-assignment-agreement.jpg" />
                <meta property="og:url" content="https://coursessor.com/ro/blog/imaginatia-in-viata-noastra" />
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
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">Imaginația în viața noastră</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>


            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                    Imaginația este un instrument puternic care ne permite să creăm și să explorăm noi idei și concepte. Este capacitatea de a forma imagini mentale   despre lucruri care nu sunt prezente in realitate. Imaginația este adesea asociată cu creativitatea și joacă un rol crucial în multe aspecte ale vieții noastre.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Imaginația ne permite să ne imaginăm posibilități care încă nu există și ne oferă capacitatea de a visa, de a planifica și de a inova. Fără imaginație, am fi limitați la ceea ce există deja în lumea noastră și am fi incapabili să dezvoltăm noi tehnologii si  să rezolvăm probleme complexe.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Copiii sunt adesea lăudați pentru imaginația lor vie, dar pe măsură ce creștem devenim mai puțin dispuși să ne folosim imaginatia. Cu toate acestea, utilizarea imaginației noastre poate fi incredibil de benefică atât pentru dezvoltarea personală, cât și profesională. Putem găsi soluții inovatoare  și putem dezvolta proiecte  care aduc bucurie și sens vieții noastre.

                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Imaginația joacă, de asemenea, un rol crucial în empatie și înțelegere. Când ne folosim imaginația pentru a ne pune în locul altcuiva, putem obține o înțelegere mai profundă a perspectivei și experiențele lor. Acest lucru ne poate ajuta să construim relații mai puternice, să dezvoltăm mai multă empatie și compasiune și să creăm o societate mai înțelegătoare.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    În concluzie, imaginația este un instrument puternic care ne poate ajuta să explorăm lumi noi, să dezvoltăm soluții inovatoare și să construim relații mai puternice. Îmbrățișându-ne imaginația și utilizându-i la maximum potențialul, putem crea un viitor mai luminos și mai vibrant pentru noi înșine și pentru cei din jurul nostru.
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
