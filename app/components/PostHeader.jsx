import Navbar from "./Navbar";
import { useState, useEffect, useRef } from "react";


export default function PostHeader({ videoSrc, title }){

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
        <header className="relative overflow-hidden w-screen h-72 scroll-smooth">
            <video
                src={videoSrc}
              
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="w-full h-full justify-center items-center backdrop-brightness-75">
                <section className="flex items-center justify-start hero w-auto h-4/6">
                    <h1 className="headerh1 text-6xl mg:text-4xl  font-satoshi p-5 font-normal text-white mt-20">{title}</h1>
                </section>
            </div>
            <Navbar ref={navbarRef} isScrolled={isScrolled} />
        </header>
    )
}

