"use client";

import { useEffect, useState } from "react";
import { Product } from "../types/product";
import ProductCard from "../component/productCard";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { removeFromwishlist } from "../action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromwishlist(productId);
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);

    toast.error("Removed from wishlist", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="w-full px-[5vw] py-16">
      <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
        My <span className="text-orange-500">Wishlist ❤️</span>
      </h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div key={product._id} className="relative">
                {/* Product Card */}
                <ProductCard product={product} />

                {/* Remove Button */}
                <button
                onClick={() => handleRemoveFromWishlist(product._id)}
                className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
                >
                Remove
                </button>

              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
