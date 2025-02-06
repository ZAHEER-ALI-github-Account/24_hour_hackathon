import Image from "next/image";
import Link from "next/link";
import companylogo from "@/app/images/companylogo.png";
import kursi from "@/app/images/kursi.png";

const First = () => {
    return (
        <div className="w-full min-h-[80vh] bg-gray-100 flex flex-col justify-center items-center px-8 md:px-16 relative">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl">
                {/* Text Content */}
                <div className="text-center md:text-left md:max-w-lg space-y-4">
                    <h1 className="text-teal-600 font-semibold text-lg">Welcome to Comforty</h1>
                    <h1 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                        Best Furniture <br />
                        Collection For Your <br />
                        Interior
                    </h1>
                    <Link href="/product">
                    <button className="mt-4 text-white bg-gradient-to-r from-blue-500 to-orange-500 hover:scale-110 transition-transform duration-300 ease-in-out px-6 py-3 rounded-lg">
                        Shop Now
                    </button>
                    </Link>
                </div>

                {/* Chair Image */}
                <div className="flex justify-center md:justify-end items-center">
                    <Image
                        src={kursi}
                        alt="chair"
                        className="h-56 w-56 md:h-72 md:w-72 object-contain"
                    />
                </div>
            </div>

            {/* Company Logo */}
            <div className="absolute bottom-0 w-full flex justify-center py-4 bg-gray-100">
                <Image src={companylogo} alt="company logo" className="h-12 md:h-16" />
            </div>
        </div>
    );
};

export default First;
