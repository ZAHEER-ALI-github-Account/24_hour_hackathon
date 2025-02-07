import { client } from "@/sanity/lib/client";
import ProductCard from "@/app/component/productCard";
import type { Product } from "../types/product"; 

export default async function ProductComponent()  {
       const resp = await client.fetch(`*[_type=="products"][0..5]{
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
            <div className="px-7 py-10 flex flex-col gap-5 ">
            <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
            Our <span className="text-orange-500">Products</span>
            </h1>
              <div className=" w-full  px-[7vw] grid   grid-cols-1 md:space-x-4 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {resp.map((product:Product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
              </div>
            </div>
        </div>
    )
}
// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import ProductCard from "@/app/component/productCard";
// import type { Product } from "../types/product"; 

// export default function Product()  {
//     const [products, setProducts] = useState<Product[]>([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             const resp = await client.fetch(`*[_type=="products"][0..5]{
//                 _id,
//                 title,
//                 price,
//                 description,
//                 "image":image.asset->url,
//                 badge,
//                 inventory,
//                 _createdAt,
//                 tags
//             }`);
//             setProducts(resp);
//         }
//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <div className="px-7 py-10 flex flex-col gap-5 ">
//             <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
//             Our <span className="text-orange-500">Products</span>
//             </h1>
//               <div className="w-full px-[7vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//                 {products.map((product) => (
//                     <ProductCard key={product._id} product={product}/>
//                 ))}
//               </div>
//             </div>
//         </div>
//     );
// }
