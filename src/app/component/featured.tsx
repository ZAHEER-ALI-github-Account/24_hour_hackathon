import { client } from "@/sanity/lib/client";
import ProductCard from "@/app/component/productCard";
import { Product } from "../types/product";

export default async function featured() {
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
        <div className="px-7 py-10 flex flex-col gap-5 ">
        <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
        Feature <span className="text-orange-500">Products</span>
      </h1>

          <div className=" w-full  px-[7vw] grid   grid-cols-1 md:space-x-4 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {resp.map((product : Product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
          </div>
        </div>
    </div>
    )
}
