"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3035d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((product) => product._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((product) => product._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.inventory, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    if (cartItems.length > 0) {
        router.push("/checkout");
        setCartItems([]);
    }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {/* Product Cards */}
            {cartItems.map((product : Product) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center space-x-4">
                {product.image && (
                        <Image
                        src={urlFor(product.image).url()}
                        className="w-16 h-16 object-cover rounded"
                        alt="Image"
                        width={500}
                        height={500}
                        />
                    )}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
                    <p className="text-sm text-gray-500">  Price: ${typeof product.price === "number" ? product.price.toFixed(2) : "0.00"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <button
                    onClick={() => handleDecrement(product._id)}
                    className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-700">{product.inventory}</span>
                  <button
                    onClick={() => handleIncrement(product._id)}
                    className="px-3 py-1 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(product._id)}
                  className="text-red-500 hover:text-red-600 mt-4 md:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Total:</h3>
                <p className="text-xl font-bold text-gray-900">${calculatedTotal().toFixed(2)}</p>
              </div>
              <button
              onClick={handleProceed}
              className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
              >
              Proceed to Checkout
              </button>


            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-700">Your cart is empty.</p>
            <Link href="/">
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => console.log("Continue Shopping")}
            >
              Continue Shopping
            </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
