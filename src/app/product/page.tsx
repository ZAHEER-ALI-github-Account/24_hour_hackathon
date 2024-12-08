import Subscription from "@/app/component/subscription";
import Navbar from "@/app/component/navbar";
import Image from "next/image";
import gray from "@/app/images/gray.png";
import pink from "@/app/images/pink.png";
import orange from "@/app/images/orange.png";
import white from "@/app/images/white.png";
import offwhite from "@/app/images/offwhite.png";
import woodtable from "@/app/images/woodtable.png";
import bw from "@/app/images/bw.png";
const ourproduct = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-10"><h1 className="font-bold text-3xl">All Products</h1></div>
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
                    <li><Image src={woodtable} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pink} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={orange} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={gray} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={offwhite} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pink} alt="sofa" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={orange} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={bw} alt="sofa" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div><Subscription/></div>
        </div>
    )
}
export default ourproduct;