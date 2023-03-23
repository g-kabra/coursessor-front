import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleDarkMode from "./ToggleDarkMode";

const Navbar = forwardRef(({ isScrolled, showToggleDarkMode = true, isFixed=true }, ref) => {
  return (
    <nav
      ref={ref}
      className={`navbar flex justify-between ${
        isFixed ? 'fixed top-0 left-0 w-full z-50' : ''
      } ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } transition-colors duration-300 ease-in-out`}
    >
      <Link href="/ro/blog">
        <div className="logo mt-6 ml-6">
          <Image
            className="logo w-142"
            src="https://coursessor.s3.eu-central-1.amazonaws.com/A15908_Coursessor_Logo_AP+(1).png"
            alt=""
            width={142}
            height={0}
          />
        </div>
      </Link>
      {showToggleDarkMode && <ToggleDarkMode />}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
