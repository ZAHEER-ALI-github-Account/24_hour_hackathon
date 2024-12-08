import Image from "next/image";
import gray from "@/app/images/gray.png";
import pink from "@/app/images/pink.png";
import orange from "@/app/images/orange.png";
import white from "@/app/images/white.png";
import offwhite from "@/app/images/offwhite.png";
import dark from "@/app/images/dark.png";
import black from "@/app/images/black.png";
const product = () => {
    return (
        <div>
            <div className="text-center mt-10"><h1 className="font-bold text-3xl">Our Products</h1></div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={gray} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pink} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={orange} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={white} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={offwhite} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={dark} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={black} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={white} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
        </div>
    )
}
export default product;