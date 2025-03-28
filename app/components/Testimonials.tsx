import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonials(){

    const ReviewCard = () => {
        return(
            <div className="w-[75vw] md:w-full" data-aos="fade-up">
                <div>
                    <div className="w-full p-[35px] bg-[#F7F9FC] hover:bg-[#008AFF] space-y-5 text-[#222D39] hover:text-white duration-300 ease-in-out rounded-md">
                        <img
                            src="/icons/quote.svg"
                            alt=""
                        />
                        <p className=" ">Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dumy text the ever since unknown printer.</p>
                    </div>
                </div>
                <div className="px-[30px] flex items-center gap-5 mt-5">
                    <img
                        src="/images/portrait.jpeg"
                        alt=""
                        className="h-[35px] w-[35px] rounded-full"
                    />
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-[#222D39]">Felix Ayodeji</h4>
                        <p className="text-[#008AFF] font-medium">Video Editor</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="w-full bg-white py-20">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-end gap-2 justify-between px-[20px] md:px-[50px]" data-aos="fade-up">
                    <div className="w-full md:max-w-[500px] text-center md:text-left" >
                        <p className="font-semibold text-[#008AFF] capitalize">TESTIMONIALS</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-5 text-[#222D39]">See What Others Have to Say About Us</h3>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-white bg-[#020C14] opacity-30 rounded-md cursor-not-allowed">
                            <FaArrowLeftLong size={18} />
                        </div>
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-white bg-[#020C14] rounded-md cursor-pointer">
                            <FaArrowRightLong size={18} />
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-auto overflow-y-hidden px-[20px] md:px-[50px] pb-5">
                    <div className="w-fit flex items-center flex-nowrap md:grid md:grid-cols-3 gap-5 mt-10 pt-5">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </div>
        </div>
    )
}