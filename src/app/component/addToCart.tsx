"use client";

import { Product } from "@/app/types/product";
import { addToCart } from "@/app/action/action";
import { Bounce, ToastContainer, toast } from 'react-toastify';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function
    const notify = () => toast.success(`${product.title} is added to cart`);
    notify();
  };

  return (
    <div>
    <button
      className="px-9 py-4 text-lg text-white rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 hover:scale-110 transition-transform duration-300 ease-in-out"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
    <div>
    <ToastContainer 
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
    />
    </div>
    </div>
  );
}
