"use client";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import Image from "next/image";
import logoicon from "@/app/images/logoicon.png";
import { useState, useRef, useEffect } from "react";
import { UserButton } from "@clerk/nextjs"; // Clerk User Button

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleMenuButton(event: React.MouseEvent) {
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="font-inter">
      {/* Top Navigation Bar */}
      <div className="px-[5vw] lg:px-[10vw] w-full h-[45px] bg-[#272343] text-white flex items-center justify-center lg:justify-between">
        <h1 className="hidden lg:block">
          <i className="ri-check-fill"></i> Free shipping on all orders over $50
        </h1>
        <div className="flex gap-4 md:gap-6">
          <select className="bg-[#272343]">
            <option>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
          </select>
          <Link href="/faq">Faqs</Link>
          <h3 className="flex items-center gap-1">
            <i className="ri-question-line"></i> Need Help
          </h3>
        </div>
      </div>

      {/* Middle Navigation Bar */}
      <div className="px-[3vw] md:px-[5vw] lg:px-[7vw] h-[84px] bg-[#F0F2F3] w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoicon} alt="Logo" width={50} height={50} className="h-[40px] object-cover" />
          <h1 className="text-lg md:text-xl font-medium">Comforty</h1>
        </div>
        <div className="flex bg-white rounded-md shadow items-center gap-2 p-2">
          <Link href="/cart" className="p-2 hover:scale-105">
            <i className="ri-shopping-cart-2-line text-[22px] md:text-[26px]"></i>
          </Link>
          <Link href="/wishlist" className="p-2 hover:scale-105">
            <i className="ri-heart-2-line text-[22px] md:text-[26px]"></i>
          </Link>
          <UserButton afterSignOutUrl="/sign-in" /> {/* Clerk User Button */}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between px-[5vw] h-[70px] items-center font-medium">
        <button className="md:hidden" onClick={handleMenuButton}>
          <i className="ri-menu-line text-[26px]"></i>
        </button>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="/product" className="hover:text-orange-600">Product</Link>
          <Link href="/about" className="hover:text-orange-600">About</Link>
          <Link href="/blog" className="hover:text-orange-600">Blog</Link>
        </div>
        <Link href="/contact" className="hover:text-orange-600">Contact: (808-555-011)</Link>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[60%] bg-[#F0F2F3] p-6 transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl">
          <i className="ri-close-large-line"></i>
        </button>
        <div className="flex flex-col gap-6 mt-10 text-lg font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Home</Link>
          <Link href="/product" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Product</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-orange-600">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
