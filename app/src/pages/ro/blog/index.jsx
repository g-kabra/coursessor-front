import Navbar from "../../../../components/Navbar"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react";

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
        <meta name="theme-color" content="#121212" />
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
          src="https://coursessor.s3.eu-central-1.amazonaws.com/pexels-tima-miroshnichenko-6549275.mp4"
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



      <section className="card flex flex-wrap flex-col items-center justify-center rounded-lg scroll-smooth animate-fade-in p-5 mg:p-6">


        <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            src="https://coursessor.s3.eu-central-1.amazonaws.com/3d-render-abstract-background-with-brain-that-surrounded-with-particles-with-twisted-trails-trails-particles-are-symoizing-ideas.jpg"
            alt=""
            className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-l-lg"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl mg:text-2xl font-satoshi  font-bold tracking-tight text-left  dark:text-white">De la învățat mecanic la gândire critică</h5>
            <p className="text-2xl mg:text-xl mb-3 font-satoshi font-normal  dark:text-gray-400">Săptămâna aceasta vă voi vorbi despre modul în care educația a evoluat în zilele noastre, de la o activitate menită să restrângă gândirea critică și imaginația elevilor, la activitatea complexă din zilele noastre.</p>
          </div>



          <Link href={"/ro/blog/de-la-invatat-mecanic-la-gandire-critica"} className=" button flex justify-start w-full ml-6 mb-5  items-center px-2 py-2 text-xl mg:text-lg font-satoshi font-medium text-center rounded-lg focus:ring-4 focus:outline-none">
            Citeste mai mult
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>

          </Link>

        </div>



      </section>

      <section className="fade card flex flex-wrap flex-col items-center justify-center rounded-lg scroll-smooth animate-fade-in p-5 mg:p-6">


        <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            src="https://coursessor.s3.eu-central-1.amazonaws.com/man-opened-magic-book-with-growing-lights-magic-powder-learning-education-concept.jpg"
            alt=""
            className="object-cover w-full rounded-t-lg h-96 md:h-auto  md:rounded-l-lg"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl mg:text-2xl font-satoshi  font-bold tracking-tight text-left  dark:text-white">Profesorul modern</h5>
            <p className="text-2xl mg:text-xl mb-3 font-satoshi font-normal  dark:text-gray-400">Relația dintre profesori si elevii lor s-a schimbat atât de mult încât din simplii dascăli profesorii au devenit adevărate modele pentru elevii lor.</p>
          </div>



          <Link href={"/ro/blog/profesorul-modern"} className=" button flex justify-start w-full ml-6 mb-5  items-center px-2 py-2 text-xl mg:text-lg font-satoshi font-medium text-center rounded-lg focus:ring-4 focus:outline-none">
            Citeste mai mult
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>

          </Link>

        </div>



      </section>

      <footer className="flex flex-wrap mg:flex-col items-center justify-between 0 mt-5 h-128 mg:h-full">
        <div className="mg:hidden ml-8">
          <div className="flex flex-wrap justify-between space-x-6">

            <Link className="Twitter icon" href="https://twitter.com/coursessor" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z" fill="#98A2B3" />
            </svg>
            </Link>



            <Link className="Linkedln icon" href="https://www.linkedin.com/company/coursessor">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1517_323294)">
                  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#98A2B3" />
                </g>
                <defs>
                  <clipPath id="clip0_1517_323294">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>



            <Link className="Facebook icon" href="https://ms-my.facebook.com/coursessor/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1517_323295)">
                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#98A2B3" />
              </g>
              <defs>
                <clipPath id="clip0_1517_323295">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </Link>
          </div>
        </div>


        <Link href="/ro/blog">
          <div className="logo ml-7 mg:ml-0 mg:mt-8 mg:mb-8">
            <Image className="logo w-142" src="https://coursessor.s3.eu-central-1.amazonaws.com/A15908_Coursessor_Logo_AP+(1).png" alt="" width={142} height={0} />
          </div>
        </Link>


        <div className="social hidden mg:block mb-4">
          <div className="flex flex-wrap justify-between space-x-6">

            <Link className="Twitter icon" href="https://twitter.com/coursessor"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z" fill="#98A2B3" />
            </svg>
            </Link>


            <Link className="Linkedln icon" href="https://www.linkedin.com/company/coursessor">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1517_323294)">
                  <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#98A2B3" />
                </g>
                <defs>
                  <clipPath id="clip0_1517_323294">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </Link>

            <Link className="Facebook icon" href="https://ms-my.facebook.com/coursessor/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1517_323295)">
                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#98A2B3" />
              </g>
              <defs>
                <clipPath id="clip0_1517_323295">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </Link>
          </div>
        </div>

        <div className="copyright mg:mb-8 mg:mt-5">
          <p className="copyright dark:text-grayy-200 text-center font-satoshi font-normal mr-5 mg:mr-0">© 2023 Coursessor. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </>
  )
}