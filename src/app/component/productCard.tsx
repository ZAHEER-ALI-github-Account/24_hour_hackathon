"use client"
import Link from "next/link";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import React, { useState, useEffect } from "react";
import { Product } from "../types/product";
import { addToCart } from "../action/action";
import { addTowishlist, removeFromwishlist } from "../action/action"; // Import wishlist functions
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl = typeof product.image === "string" ? product.image : "/placeholder-image.jpg";// Use a fallback image
  const [isWishlist, setIsWishlist] = useState(false);

  // Check if the product is in the wishlist on mount
  useEffect(() => {
    const wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsWishlist(wishlist.some((item) => item._id === product._id));
  }, [product._id]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.title} added to cart`, {
      position: "top-right",
      autoClose: 1200,
      theme: "dark",
    });
  };

  const handleWishlist = () => {
    if (isWishlist) {
      removeFromwishlist(product._id);
    } else {
      addTowishlist(product);
    }
    setIsWishlist(!isWishlist);
  };
  
  return (
    <div>
      <div className="relative group max-w-sm mx-auto bg-white/20 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl p-4">
        <Link href={`/detail/${product._id}`} passHref>
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        <div className="p-4 space-y-4 text-center">
          <h2 className="text-lg font-semibold text-[#007580]">{product.title}</h2>
          <p className="text-xl font-bold text-orange-500">${product.price}</p>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className={`text-2xl transition-transform duration-300 hover:scale-110 ${
              isWishlist ? "text-red-500" : "text-gray-600"
            }`}
          >
            <i className={isWishlist ? "ri-heart-fill" : "ri-heart-line"}></i>
          </button>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 focus:outline-none"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} theme="dark" transition={Bounce} />
    </div>
  );
}
