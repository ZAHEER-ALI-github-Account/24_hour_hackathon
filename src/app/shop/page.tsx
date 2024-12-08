import Image from "next/image";
import stool from "@/app/images/stool.png";
import atc from "@/app/images/atc.png";
import shop1 from "@/app/images/shop1.png";
import shop2 from "@/app/images/shop2.png";
import shop3 from "@/app/images/shop3.png";
import shop4 from "@/app/images/shop4.png";
import shop5 from "@/app/images/shop5.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
const shop = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-10 flex gap-8 justify-center">
                <div>
                <div><Image src={stool} alt="" className="h-80 w-80 hover:scale-105 duration-150"/></div>
                </div>
                <div>
                <div><h1 className="font-bold text-4xl">Library Stool chair</h1></div>
                <div className="mt-10"><button className="bg-[#029FAE] w-28 rounded-xl text-white">$20.00 USD</button></div>
                <div className="mt-10"><p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br />sit amet, consectetur adipiscing</p></div>
                <div className="mt-10"><Image src={atc} alt="" className="w-32"/></div>
                </div>
            </div>
            <div className="flex gap-96 justify-evenly">
            <div className="mt-10"><h1 className="text-3xl font-bold">Featured Products</h1></div>
            <div className="hidden md:block mt-12"><button className="font-semibold hover:underline">View all</button></div>
            </div>
            <div className="mt-10">
                <ul className="flex gap-5">
                    <li><Image src={shop1} alt="" className=" hover:scale-105 duration-150"/></li>
                    <li><Image src={shop2} alt="" className=" hover:scale-105 duration-150"/></li>
                    <li><Image src={shop3} alt="" className=" hover:scale-105 duration-150"/></li>
                    <li><Image src={shop4} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={shop5} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
export default shop;