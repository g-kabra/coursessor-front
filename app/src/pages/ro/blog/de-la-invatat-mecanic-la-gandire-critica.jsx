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
                    src="https://coursessorpublic.blob.core.windows.net/videoscontainer/pexels-marina-zasorina-7601710.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                    <section className="flex items-center justify-start hero w-auto h-4/6">
                        <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">De la învățat mecanic la gândire critică</h1>
                    </section>
                </div>
                <Navbar ref={navbarRef} isScrolled={isScrolled} />
            </header>




            <div className="content flex flex-col p-5 mt-5">
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight">
                    Educația este un domeniu care a suferit schimbări semnificative de-a lungul timpului. În trecut, educația se baza pe memorarea mecanică a informațiilor, iar gândirea critică și creativitatea erau efectiv ignorate. Cu toate acestea, în prezent, educația încorporează o serie de practici pedagogice care țin cont de nevoile și abilitățile tuturor elevilor. Una dintre cele mai semnificative schimbări este adoptarea tehnologiei ca resursă de învățare.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Utilizarea calculatoarelor, a platformelor de învățare online și a realității virtuale le-a permis studenților să învețe de oriunde și în orice moment. Platformele de învățare online au fost dezvoltate pentru a oferi o experiență de învățare personalizată. Un alt aspect crucial al educației moderne este conștientizarea faptului că elevii provin din medii sociale diferite. Profesorii recunosc acum nevoia de a-și adapta modul de predare la stilurile diferite de învățare ale elevilor și la statutul socio-economic al acestora.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10 ">
                    Unele școli au introdus programe de studii culturale menite să dezvolte empatia elevilor și respectul acestora pentru societatea multiculturală în care trăiesc. Educația a recunoscut, de asemenea, importanța predării gândirii critice și a abilităților de rezolvare a problemelor. În loc să se concentreze doar pe memorarea mecanică, studenții sunt încurajați să dezvolte abilități de analiză, sinteză și evaluare.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10">
                    Gândirea critică îi ajută pe elevi să abordeze problemele în mod logic, să-și formeze propriile opinii și să ia decizii informate.
                </p>
                <p className="fade font-satoshi text-3xl mg:text-xl tracking-tight mt-10">
                    În concluzie, educația modernă se caracterizează prin utilizarea tehnologiei, dezvoltarea unei abordări incluzive și prin faptul că accentul este pus pe gândirea critică și abilitățile de rezolvare a problemelor. Aceste schimbări urmăresc să abordeze natura dinamică a lumii în care trăim și să le confere elevilor setul de abilități necesare pentru a reuși în societatea de astăzi. Viitorul educației pare promițător, deoarece continuă să evolueze și să se adapteze la nevoile în schimbare ale elevilor.
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

