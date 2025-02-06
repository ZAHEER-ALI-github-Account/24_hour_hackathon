import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductCard from "@/app/component/productCard";
import block from "@/app/images/Block.png";
import block1 from "@/app/images/block1.png";
import next from "@/app/images/next.png";
import made from "@/app/images/made.png";
import unbeatable from "@/app/images/unbeatable.png";
import recycled from "@/app/images/recycled.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { Product } from "../types/product";

export default async function About() {
    const resp = await client.fetch(`*[_type=="products"][0..2]{
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
        <div>
            <Navbar />
            
            {/* First Image Section */}
            <div className="mt-12">
                <ul className="flex flex-wrap justify-center gap-8">
                    <li>
                        <Image
                            src={block}
                            alt="Block Image"
                            className="w-full sm:w-[380px] h-[300px] object-cover rounded-lg transition-transform transform hover:scale-105 duration-150"
                        />
                    </li>
                    <li>
                        <Image
                            src={block1}
                            alt="Block Image"
                            className="w-full sm:w-[380px] h-[300px] object-cover rounded-lg transition-transform transform hover:scale-105 duration-150"
                        />
                    </li>
                </ul>
            </div>

            {/* Heading for the Brand Difference */}
            <div className="mt-16 text-center">
                <h1 className="font-extrabold text-4xl sm:text-5xl text-gray-900 uppercase tracking-wider">
                    What Makes Our Brand <span className="text-orange-500">Different</span>
                </h1>
            </div>

            {/* Icons Section */}
            <div className="mt-10">
                <ul className="flex flex-wrap justify-center gap-8">
                    <li>
                        <Image
                            src={next}
                            alt="Next Image"
                            className="w-[120px] sm:w-[150px] object-contain hover:scale-105 transition-transform duration-150"
                        />
                    </li>
                    <li>
                        <Image
                            src={made}
                            alt="Made Image"
                            className="w-[120px] sm:w-[150px] object-contain hover:scale-105 transition-transform duration-150"
                        />
                    </li>
                    <li className="hidden md:block">
                        <Image
                            src={unbeatable}
                            alt="Unbeatable Image"
                            className="w-[120px] sm:w-[150px] object-contain hover:scale-105 transition-transform duration-150"
                        />
                    </li>
                    <li className="hidden md:block">
                        <Image
                            src={recycled}
                            alt="Recycled Image"
                            className="w-[120px] sm:w-[150px] object-contain hover:scale-105 transition-transform duration-150"
                        />
                    </li>
                </ul>
            </div>

            {/* Products Heading */}
            <div className="w-full px-[7vw] flex justify-center mt-16">
                <h1 className="font-extrabold text-4xl sm:text-5xl text-center uppercase tracking-wider text-gray-900">
                    Our <span className="text-orange-500">Products</span>
                </h1>
            </div>


            {/* Product Cards */}
            <div className="w-full px-[7vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-10">
                {resp.map((product : Product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
