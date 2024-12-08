import Image from "next/image";
import q1 from "@/app/images/q1.png";
import q2 from "@/app/images/q2.png";
import q3 from "@/app/images/q3.png";
import q4 from "@/app/images/q4.png";
import q5 from "@/app/images/q5.png";
import q6 from "@/app/images/q6.png";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
const faq = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-center mt-10"><h1 className="font-bold text-3xl">Questions Look Here</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit iste at facere necessitatibus itaque!</p>
            </div>
            <div className="flex mt-10 gap-5">
                <div>
                    <ul className="">
                        <li><Image src={q1} alt="" className="mb-5 hover:scale-105 duration-150"/></li>
                        <li><Image src={q2} alt="" className="mb-5 hover:scale-105 duration-150"/></li>
                        <li><Image src={q3} alt="" className="hover:scale-105 duration-150"/></li>
                    </ul>
                </div>
                <div>
                    <ul className="hidden md:block">
                        <li><Image src={q4} alt="" className="mb-5 hover:scale-105 duration-150"/></li>
                        <li><Image src={q5} alt="" className="mb-5 hover:scale-105 duration-150"/></li>
                        <li><Image src={q6} alt="" className="hover:scale-105 duration-150"/></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default faq;