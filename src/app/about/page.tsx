import Image from "next/image";
import block from "@/app/images/Block.png";
import block1 from "@/app/images/block1.png";
import next from "@/app/images/next.png";
import made from "@/app/images/made.png";
import unbeatable from "@/app/images/unbeatable.png";
import recycled from "@/app/images/recycled.png";
import pop1 from "@/app/images/pop1.png";
import pop2 from "@/app/images/pop2.png";
import pop3 from "@/app/images/pop3.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
const about = () => {
    return(
        <div>
            <Navbar/>
            <div className="mt-10">
                <ul className="md:flex justify-center gap-8">
                    <li><Image src={block} alt="" className="w-[380px] h-[300px] hover:scale-105 duration-150"/></li>
                    <li><Image src={block1} alt="" className="w-[380px] h-[300px] hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div><h1 className="font-bold text-3xl text-center mt-10">What Makes Our Brand Different</h1></div>
            <div className="mt-10">
                <ul className="flex gap-5">
                    <li><Image src={next} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={made} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={unbeatable} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                    <li><Image src={recycled} alt="" className="hidden md:block hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <div className="mt-10 ml-5"><h1 className="font-bold text-3xl">Our Popular Products</h1></div>
            <div className="mt-10">
                <ul className="flex justify-around">
                    <li><Image src={pop1} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pop2} alt="" className="hover:scale-105 duration-150"/></li>
                    <li><Image src={pop3} alt="" className="hover:scale-105 duration-150"/></li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
export default about;