import Image from "next/image";
import gray from "@/app/images/gray.png";
import pink from "@/app/images/pink.png";
import orange from "@/app/images/orange.png";
import white from "@/app/images/white.png";
import wooden from "@/app/images/wooden.png";
import wing from "@/app/images/wing.png";
import desk from "@/app/images/desk.png";
const featured = () => {
    return (
        <div>
            <div className="mt-10"><h1 className="font-bold text-3xl">Featured Products</h1></div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={gray} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pink} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={orange} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={white} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div className="mt-10"><h1 className="font-bold text-3xl">Top Categories</h1></div>
            <div className="mt-10 justify-center">
                <ul className="flex gap-10 ml-5">
                    <li><Image src={wooden} alt="sofa" className="md:w-96 md:h-96 hover:scale-105 duration-150"/></li>
                    <li><Image src={wing} alt="sofa" className="xs:w-] md:w-96 md:h-96  hover:scale-105 duration-150"/></li>
                    <li><Image src={desk} alt="sofa" className="hidden md:block w-96 h-96  hover:scale-105 duration-150"/></li>
                </ul>
            </div>
        </div>
    )
}
export default featured;