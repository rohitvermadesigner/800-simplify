"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./Header.module.css";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Contact Us", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` ${style.header} ${scrolled ? "sticky md:top-0" : "fixed max-w-7xl mx-auto md:top-5"}`}
    >
      <div
        className={`
    p-4 
    ${
      scrolled
        ? "bg-white rounded-none border border-b-1"
        : isOpen
          ? "bg-[#fff] rounded-xl"
          : "bg-[rgba(255,255,255,0.7)] md:rounded-xl"
    }
    transition-all duration-300
  `}
      >
        {" "}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="md:shadow-sm w-full md:w-1/3 md:w-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <a href="#" className="flex items-center gap-3">
                  <Image
                    src="/images/logo.svg"
                    width={180}
                    height={0}
                    alt="800 Simplify"
                    className="h-auto w-[180px]"
                  />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 text-[#697B84] hover:text-[#001f3f]"
                >
                  <span>{isOpen ? <X /> : <Menu />}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:w-auto md:px-3">
            <nav
              id="mainNav"
              className={` ${isOpen ? "block" : "hidden"} md:block`}
            >
              <div className="">
                <ul
                  className={` ${isOpen ? "mt-4" : "mt-0"} flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-6 md:ml-auto pb-3 md:pb-0`}
                >
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`text-[#364153] font-semibold hover:text-[#001f3f] ${
                            isActive ? "text-black font-bold" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          <div className="md:block hidden">
            <Link
              href="https://800-simplify.org/800-simplify/?focus=true"
              target="_blank"
              className="bg-[#652D8E] text-[#ffffff] py-3 px-5 rounded-lg ml-0 md:ml-24 drop-shadow-[2px_4px_10px_#AD46FF4D]"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
