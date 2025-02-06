import { client } from "@/sanity/lib/client";
import "remixicon/fonts/remixicon.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ProductCard from "@/app/component/productCard";
import type { Product } from "../types/product"; 

export default async function Product() {
  const resp = await client.fetch(`*[_type=="products"]{
    _id,
      title,
      price,
      description,
      "image":image.asset->url,
      badge,
      inventory,
      _createdAt,
      tags
  }`);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl uppercase tracking-widest text-gray-900">
          Our <span className="text-orange-500">Collection</span>
        </h1>
        <p className="text-center text-gray-600 mt-3 text-lg md:text-xl">
          Discover our exclusive range of products.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {resp.map((product:Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
