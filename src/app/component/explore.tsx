import Image from "next/image";
import orange1 from "@/app/images/orange1.png";
import card from "@/app/images/card.png";
import cardone from "@/app/images/cardone.png";
import chair from "@/app/images/chair.png";

const Explore = () => {
  return (
    <div className="w-full px-4 md:px-20 mt-20">
      {/* Section Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
        Explore <span className="text-orange-500">New & Popular</span> Styles
      </h1>

      {/* Grid Container */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Hero Image with Text Overlay */}
        <div className="relative h-[400px] md:h-[550px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={orange1}
            alt="Explore Styles"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase text-center">
              Discover The Latest Trends
            </h2>
          </div>
        </div>

        {/* Right Side - Small Product Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[card, chair, cardone, chair].map((image, index) => (
            <div
              key={index}
              className="relative h-[200px] md:h-[270px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image}
                alt={`Explore ${index}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
