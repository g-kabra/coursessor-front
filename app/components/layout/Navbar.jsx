import { forwardRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    background-color: white;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState();
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth < 512);
    }
    setCollapsed(window.innerWidth < 512);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="h-[10%] text-white w-full z-[5] fixed top-0 bg-[#121519]">
      <div className="w-[90%] h-full items-center flex justify-between m-auto">
        <Link href="">
          <p className="relative text-xl font-medium z-[10]">Coursessor</p>
        </Link>
        {!collapsed && (
          <div className="flex gap-8 text-md font-light">
            <Link href="">Home</Link>
            <Link href="">Research</Link>
            <Link href="">About</Link>
          </div>
        )}
        {collapsed && (
          <div>
            <div
              className={`absolute right-0 top-0 z-[5] bg-[#0000001a] backdrop-blur transition-all h-screen w-screen flex items-center justify-center ${
                !openNav ? " translate-x-full " : " "
              }`}
              onClick={() => {
                setOpenNav(!openNav);
              }}>
              <div className="flex flex-col items-center gap-10 text-2xl">
                <Link href="">Home</Link>
                <Link href="">Research</Link>
                <Link href="">About</Link>
              </div>
            </div>
            <StyledBurger
              open={openNav}
              onClick={() => {
                setOpenNav(!openNav);
              }}
              className="z-[10] relative">
              <div></div>
              <div></div>
              <div></div>
            </StyledBurger>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
