import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SoftwareIntegrations(){
    const containerRef = useRef(null);

    useGSAP(() => {

        const container = containerRef.current

        let tl = gsap.timeline({defaults: {ease: "none"}})

        tl.to(container, {
            x: '-70%',
            duration: 15,
            repeat: -1,
            yoyo: true,
        })

    }, {scope: containerRef})


    const SoftwareCard = ({software, icon, industry, subText}:{software: string, icon: string, industry: string, subText: string}) => {
        return(
            <div className="w-[75vw] md:w-[450px] bg-white p-[15px] md:p-[30px] space-y-4" data-aos="fade-up">
                <div className="flex flex-col flex-row items-center gap-3">
                    <img
                        src={icon}
                        alt={software + ' logo'}
                        className="h-[60px] w-[60px] rounded-md"
                    />
                    <div>
                        <h4 className="text-lg md:text-xl font-semibold text-[#222D39]">{software}</h4>
                        <p className="text-[#008AFF] font-medium">{industry}</p>
                    </div>
                </div>
                {/* <p className="font-medium text-[#8492A7]">{subText}</p> */}
            </div>
        )
    }

    return(
        <div className="w-full bg-[#F7F9FC] py-20">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-end gap-2 justify-between px-[20px] md:px-[50px]" data-aos="fade-up">
                    <div className="w-full md:max-w-[500px] text-center md:text-left">
                        <p className="font-semibold text-[#008AFF] uppercase">Software Integrations</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-5 text-[#222D39]">Integrate with your favorite business tools.</h3>
                    </div>
                    <div className="hidden md:flex items-center gap-4 p-2 bg-white">
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-[#020C14] opacity-40 rounded-md cursor-not-allowed">
                            <FaArrowLeftLong size={18} />
                        </div>
                        <div className="h-[50px] w-[50px] flex items-center justify-center text-white bg-[#020C14] rounded-md cursor-pointer">
                            <FaArrowRightLong size={18} />
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-hidden overflow-y-hidden px-[20px] md:px-[50px] pb-5">
                    <div className="w-fit flex items-center flex-nowrap gap-5 mt-10 pt-5" ref={containerRef}>
                        <SoftwareCard
                            icon="/images/softwares/intercom.svg"
                            industry="Software company"
                            software="Intercom"
                            subText="Lorem ipsum dolo sit ametui consectetur adipiscing elied. Tortor tristique quam eratus consectetur vivam."
                        />
                        <SoftwareCard
                            icon="/images/softwares/slack.svg"
                            industry="Software company"
                            software="Slack"
                            subText="Lorem ipsum dolo sit ametui consectetur adipiscing elied. Tortor tristique quam eratus consectetur vivam."
                        />
                        <SoftwareCard
                            icon="/images/softwares/twillo.svg"
                            industry="Software company"
                            software="Twillo"
                            subText="Lorem ipsum dolo sit ametui consectetur adipiscing elied. Tortor tristique quam eratus consectetur vivam."
                        />
                        <SoftwareCard
                            icon="/images/softwares/trello.svg"
                            industry="Software company"
                            software="Trello"
                            subText="Lorem ipsum dolo sit ametui consectetur adipiscing elied. Tortor tristique quam eratus consectetur vivam."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}