import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define the expected type for categories
interface Category {
  _id: string;
  title: string;
  image: string;
}

export default async function Categories() {
  const resp: Category[] = await client.fetch(`*[_type=="categories"]{
    _id,
    title,
    "image": image.asset->url,
  }`);

  return (
    <div className="px-[7vw] py-12">
      <h1 className="font-extrabold text-5xl text-center uppercase tracking-wider text-gray-900">
        Top <span className="text-orange-500">Categories</span>
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-12">
        {resp.map((elem: Category) => (
          <div
            key={elem._id}
            className="relative h-[400px] w-full max-w-[340px] bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden group mx-auto transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src={elem.image}
              alt={elem.title}
              width={340}
              height={400}
              className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-center justify-center">
              <h2 className="text-xl font-bold text-white uppercase text-center">
                {elem.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
