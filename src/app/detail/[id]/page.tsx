import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import 'remixicon/fonts/remixicon.css';
import ProductCard from "@/app/component/productCard";
import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";
import { Product } from "@/app/types/product";
import AddToCartButton from "@/app/component/addToCart";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await client.fetch(`*[_type == "products" && _id == $id][0]`, {
    id: params.id,
  });

  if (!product) {
    return <div className="text-center text-2xl font-semibold">PRODUCT NOT FOUND</div>;
  }

  const res = await client.fetch(`*[_type=="products"][0..3]{
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
    <>
      <Navbar />
      <div className="w-full px-[5vw] py-16">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={600}
              height={600}
              className="object-cover object-center rounded-3xl"
            />
          </div>
          <div className="w-full md:w-[50%] px-[2vw] pt-6 space-y-5">
            <h1 className="text-[40px] md:text-[5vw] font-bold leading-[70px] text-gray-800">
              {product.title}
            </h1>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full text-white text-xl font-semibold shadow-lg hover:scale-105 transition">
              ${product.price}.00 USD
            </button>
            <hr className="border-gray-300" />
            <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            <AddToCartButton product={product} />
          </div>
        </div>

        <div className="px-[4vw] space-y-12 mt-20 mb-20">
          <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
          Feature <span className="text-orange-500">Products</span>
          </h1>
            <button className="text-2xl underline hover:opacity-50">View All</button>
          </div>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {res.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
