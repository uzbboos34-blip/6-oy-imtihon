import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
    return (
        <div>
            <Navbar />

            <section className="px-20 py-24 flex flex-col">
                <div className="flex">
                    <div>
                        <img src="./Shape (1).png" alt="" />
                        <p className="text-[14px] mb-3 opacity-70 mt-5">TRENDING</p>
                        <h2 className="w-[550px] text-[45px] leading-tight font-bold mb-5">Breaking the code How did we build our Figma plugin </h2>
                        <p className="opacity-60 text-[16px] w-[570px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                        <Link to="/blog_page_inner" className="flex items-center gap-2 mt-5">
                            <button className="text-[#444CFC]">Read More</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                        <div className="flex items-center gap-4 mt-8">
                            <img src="./Image (6).png" alt="" />
                            <p className="text-[16px] opacity-80">Andrew Jonson </p>
                            <p className="opacity-60">|</p>
                            <p className="opacity-60">Posted on 27th January 2021</p>
                        </div>
                        <img className="w-[570px] h-[324px] mt-13" src="./Image (7).png" alt="" />
                    </div>

                    <div className="w-[400px] h-[700px] bg-[#FFDFC6] flex ml-25">
                        <div className="flex flex-col ">
                            <div className="flex flex-col p-10">
                                <h3 className=" w-[280px] text-[20px] font-bold">Great design expectations prejudice in digital products in Next Year</h3>
                                <div className="flex items-center gap-4 mt-5">
                                    <img src="./Image (6).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-10">
                                <h3 className=" w-[280px] text-[20px] font-bold">Great design expectations prejudice in digital products in Next Year</h3>
                                <div className="flex items-center gap-4 mt-5">
                                    <img src="./Image (8).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Mathew Jasele</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-10">
                                <h3 className=" w-[280px] text-[20px] font-bold">Great design expectations prejudice in digital products in Next Year</h3>
                                <div className="flex items-center gap-4 mt-5">
                                    <img src="./Image (9).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Hussen Abakas</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="w-[40px] h-[40px]" src="./Shapes (1).png" alt="" />
                    </div>
                </div>
                <div className="mt-30">
                    <h2 className="text-[48px] font-bold">Read Recent Post</h2>

                    <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className=" flex bg-[#F9F9FF]">
                            <img src="./Image (10).png" alt="" />
                            <div className="p-8">
                                <h3 className="w-[200px] text-[20px] font-bold">Today’s best design trends for digital products</h3>
                                <div className="flex items-center gap-4 mt-10">
                                    <img src="./Image (6).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex bg-[#F9F9FF]">
                            <img src="./Image (11).png" alt="" />
                            <div className="p-8">
                                <h3 className="w-[200px] text-[20px] font-bold">Today’s best design trends for digital products</h3>
                                <div className="flex items-center gap-4 mt-10">
                                    <img src="./Image (6).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex bg-[#F9F9FF]">
                            <img src="./Image (12).png" alt="" />
                            <div className="p-8">
                                <h3 className="w-[200px] text-[20px] font-bold">Today’s best design trends for digital products</h3>
                                <div className="flex items-center gap-4 mt-10">
                                    <img src="./Image (6).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex bg-[#F9F9FF]">
                            <img src="./Image (13).png" alt="" />
                            <div className="p-8">
                                <h3 className="w-[200px] text-[20px] font-bold">Today’s best design trends for digital products</h3>
                                <div className="flex items-center gap-4 mt-10">
                                    <img src="./Image (6).png" alt="" />
                                    <div>
                                        <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                        <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="bg-[#F9F9F9] px-20 py-24">
                <h2 className="text-[45px] font-bold">All posts</h2>

                <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="flex flex-col bg-white">
                        <img src="./Image (14).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white">
                        <img src="./Image (15).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white">
                        <img src="./Image (16).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white">
                        <img src="./Image (17).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white">
                        <img src="./Image (18).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white">
                        <img src="./Image (19).png" alt="" />
                        <div className="p-5">
                            <h3 className="w-[200px] text-[20px] font-bold">We aim to attain the greatest satisfaction for our clients</h3>
                            <p className="opacity-60 text-[14px] mt-3">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                            <div className="flex items-center gap-4 mt-7">
                                <img src="./Image (6).png" alt="" />
                                <div>
                                    <p className="text-[14px] opacity-80 -mb-1">Andrew Jonson</p>
                                    <p className="opacity-60 text-[14px]">Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}