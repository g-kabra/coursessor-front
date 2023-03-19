import Navbar from "./Navbar";

const Header = () => {
    return (
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
                    <Navbar />
                    <section className="flex items-center justify-center hero w-auto h-4/6">
                        <h1 className="text-6xl mg:text-4xl  font-satoshi p-5 text-white">Title</h1>
                    </section>
                </div>
        </header>
    )
}
export default Header;