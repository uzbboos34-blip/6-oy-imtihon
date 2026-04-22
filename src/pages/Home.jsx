import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

export default function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            <Navbar />
            <div className="w-full bg-gray-600"></div>

            <header className="bg-[#232536] px-20 py-10 flex flex-col gap-16">
                <div className="flex justify-between items-center">
                    <div className="w-[450px] flex flex-col gap-7">
                        <h2 className="text-white text-5xl font-bold">
                            Transform Your Idea Into Reality with Finsweet
                        </h2>

                        <p className="text-white opacity-60">
                            The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
                        </p>

                        <button 
                            className="relative h-[50px] w-[200px] bg-[#444CFF] text-white flex items-center justify-center gap-2 cursor-pointer"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            <div className="absolute top-0 left-0 w-6 h-6">
                                <img src="./Shapes (1).svg" alt="" />
                            </div>

                            <span>Request Quote</span>
                            <img src="./Icon (1).png" alt="" />
                        </button>
                    </div>

                    <img
                        className="w-[500px] h-[550px] object-cover"
                        src="./Header Image.png"
                        alt="header"
                    />
                </div>

                <div className="flex mt-10 gap-4 items-center ">
                    <div className="flex flex-col">
                        <p className="text-white opacity-60 text-sm">Our Clients</p>
                        <h3 className="text-white mb-3">We've Worked with</h3>
                    </div>

                    <div className="flex items-center gap-2 ">
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (4).png" alt="" />
                        <img src="./Logo (5).png" alt="" />
                        <img src="./Logo (6).png" alt="" />
                        <img src="./Logo (7).png" alt="" />
                    </div>
                </div>

            </header>

            <section className="flex flex-col  mt-15 px-20 pb-16">
                <div className="flex justify-between mb-10">
                    <div className="max-w-[600px]">
                        <p className="text-sm opacity-60 mb-3">
                            ABOUT US
                        </p>

                        <h2 className="w-130 text-4xl font-bold text-[#232536]">
                            The company leads entire webdesign process from concept to delivery.
                        </h2>
                    </div>

                    <div className="max-w-[400px]">
                        <h3 className="text-xl font-semibold mb-3 mt-9">
                            The Era Of Technology.
                        </h3>
                        <p className="opacity-60 text-sm">
                            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                    <img className="w-full" src="./Image 1.png" alt="" />
                    <img className="w-full" src="./Image 2.png" alt="" />
                    <img className="w-full " src="./Image 3.png" alt="" />
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-10">
                        <img src="./Number 1.png" alt="" />
                        <img src="./Number 2.png" alt="" />
                        <img src="./Number 3.png" alt="" />
                        <img src="./Number 4.png" alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Link className="text-[#444CFC]" to="/clone">Read about us</Link>
                        <img className="w-5 h-2 mt-1" src="./Icon (2).png" alt="arrow icon" />
                    </div>
                </div>

            </section>

            <section className="flex px-20 py-24 bg-[#ECF8F9] justify-between items-center mt-10">
                <div className="w-[550px] flex flex-col">
                    <p className="text-[14px] mb-3 opacity-80">
                        OUR EXPERTISE
                    </p>

                    <h2
                        className="text-[42px] font-bold mb-6"
                    >
                        We want to get local identification in every corner of the world in this era of global citizenship
                    </h2>
                    <p className="opacity-60 text-[16px] w-[570px]">
                        Through True Rich Attended does no end it his mother since real had half
                        every him case in packages enquire we up ecstatic unsatiable saw his giving
                        Remain expense you position concluded.
                    </p>
                </div>


                <div className="flex flex-col w-[515px]">
                    <img className="absolute mt-[-15px]" src="./Shape.png" alt="" />
                    <div className=" bg-white  flex gap-6 p-10 py-6 ">
                        <div className="w-[100px]">
                            <img src="./Group 1749.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">On Time Delivery</h3>
                            <p className="opacity-60 text-[15px]">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white flex gap-6 p-10 py-6 mt-4">
                        <div className="w-[100px]">
                            <img src="./Group 1755.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">Best Quality</h3>
                            <p className="opacity-60 text-[15px]">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white flex gap-6 p-10 py-6 mt-4">
                        <div className="w-[100px]">
                            <img src="./Group 1855.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">Support Assist</h3>
                            <p className="opacity-60 text-[15px] ">
                                Through True Rich Attended does no end it his mother since real had half every him.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src="./Group 1748.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col px-20 py-24 bg-[#FFEAD8]">
                <div className="flex flex-col w-[650px] mb-16">
                    <p className="text-[14px] mb-4 opacity-80">
                        OUR SERVICES
                    </p>

                    <h2 className="text-[48px] font-bold mb-8">
                        We build software solutions that solve client's business challenges
                    </h2>

                    <button className="relative h-[55px] w-[200px] bg-[#444CFC] text-white flex items-center justify-center gap-3">
                        <div className="absolute top-0 left-0 w-6 h-6">
                            <img src="./Shapes (1).svg" alt="" />
                        </div>
                        <span className="text-[16px]">Start a Project</span>
                        <img src="./Icon (1).png" alt="" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-white p-12 flex flex-col">
                        <div className="mb-6">
                            <img src="./Icon Div.png" alt="" />
                        </div>
                        <h3 className="font-bold text-[22px] mb-4">Technical support</h3>
                        <p className="opacity-60 text-[15px]">
                            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                        </p>
                        <a href="#" className="text-[#444CFC] text-[15px] flex items-center gap-2 mt-auto">
                            Read more
                            <img src="./Icon (2).png" alt="" />
                        </a>
                    </div>

                    <div className="bg-white p-12 shadow-sm flex flex-col items-start">
                        <div className="mb-6">
                            <img src="./Icon Div (1).png" alt="" />
                        </div>
                        <h3 className="font-bold text-[22px]  mb-4">Testing Management</h3>
                        <p className="opacity-60 text-[15px] mb-8">
                            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                        </p>
                        <a href="#" className="text-[#444CFC] text-[15px] flex items-center gap-2 mt-auto">
                            Read more
                            <img src="./Icon (2).png" alt="" />
                        </a>
                    </div>

                    <div className="bg-white p-12 flex flex-col items-start">
                        <div className="mb-6">
                            <img src="./Icon Div (2).png" alt="" />
                        </div>
                        <h3 className="font-bold text-[22px] mb-4">Development</h3>
                        <p className="opacity-60 text-[15px] mb-8">
                            We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                        </p>
                        <a href="#" className="text-[#444CFC] text-[15px] flex items-center gap-2 mt-auto">
                            Read more
                            <img src="./Icon (2).png" alt="" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col px-20 py-24 bg-white">
                <div>
                    <div className="flex justify-between">
                        <div className="flex flex-col w-[650px] mb-16">
                            <p className="text-[14px] mb-4 opacity-80">
                                OUR PROCESS
                            </p>
                            <h2 className="text-[48px] font-bold mb-5">
                                The process we are working With Our client Worldwide
                            </h2>
                            <p className="opacity-60 text-[18px] mb-8">
                                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                            </p>
                        </div>
                        <img className="w-[25px] h-[25px] mt-5" src="./Shapes (1).png" alt="" />
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-10">
                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./01.png" alt="" className="absolute top-6 right-6" />

                            <div className="w-[110px]">
                                <img src="./Icon Div (3).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Discover
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>

                            <img src="./Line 1.png" alt="" className="absolute top-1/2 -right-[32px] w-[32px]" />

                            <div className="absolute bottom-0 left-0  w-full h-[6px] flex">
                                <img src="./Group 1748.png" alt="" />
                            </div>
                        </div>

                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./02.png" alt="" className="absolute top-6 right-6" />

                            <div className="w-[110px]">
                                <img src="./Icon Div (4).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Designing
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>

                            <img src="./Line 1.png" alt="" className="absolute top-1/2 -right-[32px] w-[32px]" />
                        </div>

                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./03.png" alt="" className="absolute top-6 right-6" />

                            <div className="w-[110px]">
                                <img src="./Icon Div (5).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Development
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./04.png" alt="" className="absolute top-6 right-6" />

                            <div className="w-[110px]">
                                <img src="./Icon Div (6).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Testing
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>

                            <img src="./Line 1.png" alt="" className="absolute top-1/2 -right-[32px] w-[32px]" />
                        </div>

                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./05.png" alt="" className="absolute top-6 right-6" />

                            <div className="w-[110px]">
                                <img src="./Icon Div (7).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Deployment
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>

                            <img src="./Line 1.png" alt="" className="absolute top-1/2 -right-[32px] w-[32px]" />
                        </div>

                        <div className="relative flex  gap-5 bg-white p-8 pr-6 border border-[#F4F5F5]">
                            <img src="./06.png" alt="" className="absolute top-6 right-6" />

                            <div className="absolute top-0 left-0 w-full h-[6px] flex">
                                <img src="./Group 1748.png" alt="" />
                            </div>

                            <div className="w-[110px]">
                                <img src="./Icon Div (8).png" alt="" className="w-full" />
                            </div>

                            <div>
                                <h3 className="font-bold text-[22px] mb-4 mt-1">
                                    Maintenance
                                </h3>
                                <p className="opacity-60 text-[15px]">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-between items-center px-20 py-24 bg-[#F9F9FF]" >
                <div className="flex flex-col w-[530px] gap-3">
                    <img className="w-[20px] opacity-80" src="./Shape.png" alt="" />
                    <h2 className="font-bold text-[48px]">
                        Our customers love what we do
                    </h2>
                    <h3>Transform your idea into reality with finsweet</h3>
                    <p className="opacity-60 text-[15px] w-[440px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <img src="./Image 3 (1).png" alt="" />
                        <img src="./Image 2 (1).png" alt="" />
                        <img src="./Image 1 (1).png" alt="" />
                    </div>
                    <p>
                        <span className="font-bold text-[18px] text-black">30+</span>{" "}
                        <span className="text-[14px]">Customer Reviews</span>
                    </p>
                </div>

                <div className="flex flex-col  items-center">
                    <div className="relative flex w-[580px]">

                        <div className="w-[45px] flex">
                            <img src="Shapes (2).png" alt="" className="w-full h-full" />
                        </div>

                        <div className="relative bg-white p-12 pr-14">
                            <div className="absolute -top-[16px] right-12 px-2">
                                <img src="./Quote.png" alt="" />
                            </div>
                            <h3 className="text-[22px] font-bold">
                                Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
                            </h3>

                            <div className="mt-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img src="./Image 3 (1).png" alt="Johnny Andro" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[18px]">Johnny Andro</span>
                                        <span className="opacity-60 text-[14px]">Director, Company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-10">
                        <img src="./Circles.png" alt="" />
                    </div>
                </div>


            </section>

            <section className="flex flex-col px-20 py-24 bg-[#ECF8F9]">
                <img className="w-[20px] opacity-80" src="./Shape.png" alt="" />
                <h2 className="font-bold text-[48px]">
                    Read our latest blogs & news
                </h2>

                <div className="flex gap-90">
                    <div className="w-[230px] flex pt-10">
                        <img src="./Image (1).png" alt="" />
                        <div className="bg-white p-8 w-[290px]">
                            <p className="opacity-60 text-[15px]">Jan 19, 2021</p>
                            <h3 className="font-bold text-[22px] mb-5 mt-1 w-[260px] ">
                                Today’s best design trends for digital products
                            </h3>
                            <a href="#" className="text-[#444CFC] text-[15px] flex items-center gap-2 mt-auto">
                                Read more
                                <img src="./Icon (2).png" alt="" />
                            </a>

                        </div>
                    </div>

                    <div className="w-[230px] flex pt-10">
                        <img src="./Image (2).png" alt="" />
                        <div className="bg-white p-8 w-[290px]">
                            <p className="opacity-60 text-[15px]">Jan 19, 2021</p>
                            <h3 className="font-bold text-[22px] mb-5 mt-1 w-[250px] ">
                                A practical guide to building a brand strategy
                            </h3>
                            <a href="#" className="text-[#444CFC] text-[15px] flex items-center gap-2 mt-auto">
                                Read more
                                <img src="./Icon (2).png" alt="" />
                            </a>
                        </div>
                    </div>

                </div>


            </section>
            
            <Footer />

        </div>
    )
}