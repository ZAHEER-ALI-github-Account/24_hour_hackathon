import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";
import Image from "next/image";
import vertical1 from "@/app/images/vertical1.png"; 
import vertical2 from "@/app/images/vertical2.png";
import summary from "@/app/images/summary.png"
const cart = () => {
    return (
        <div>
            <div><Navbar/></div>
            <div className="flex">
                <div><h1 className="font-bold text-3xl">Bag</h1></div>
            <div className="mt-10">
                <ul className="">
                    <li><Image src={vertical1} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={vertical2} alt="" className="hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div className="hidden md:block"><Image src={summary} alt=""/></div>
            </div>
            <div><Footer/></div>
        </div>
    )
}
export default cart;