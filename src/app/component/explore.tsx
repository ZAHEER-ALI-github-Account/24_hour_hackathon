import Image from "next/image";
import orange1 from "@/app/images/orange1.png";
import card from "@/app/images/card.png";
import cardone from "@/app/images/cardone.png";
import chair from "@/app/images/chair.png";
const explore = () => {
    return (
        <div className="flex w-[100%] md:h-[548px] space-x-2 xs:flex-col md:flex-row mt-28 md:ml-44">
            <div className="h-full md:w-[448px] flex items-center justify-center relative">
              <div>
                <Image
                  src={orange1}
                  alt=""
                  className=" md:h-[548px] object-cover hover:scale-105 duration-150 cursor-pointer rounded-md"
                />
                <div className="-rotate-90 md:w-[648px] bg-white  xs:text-[18px] xs:w-[350px] xs:top-[40%] xs:right-[40%] md:text-[28px] px-2 py-2 font-normal  xs:h-[50px] md:h-[58px] absolute md:top-[36%]  md:right-[27%]">EXPLORE NEW AND POPULAR STYLES </div>
              </div>
            </div>
            <div className="h-full md:w-[548px] flex flex-col xs:px-3 space-y-2 xs:mt-5">
              <div className="w-full h-[50%] flex space-x-2  ">
                <div className="w-[50%] h-full">
                  <Image
                    src={card}
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer"
                  />
                </div>
                <div className="w-[50%] h-full">
                  <Image
                    src={chair}
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md"
                  />
                </div>
              </div>
              <div className="w-full h-[50%] space-x-2  bg-red- flex">
                <div className="w-[50%] h-full">
                  <Image
                    src={cardone}
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md "
                  />
                </div>
                <div className="w-[50%] h-full">
                  <Image
                    src={chair}
                    alt=""
                    className="hover:scale-105 duration-150 cursor-pointer rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
    )
}
export default explore;