import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Company() {
    return (
        <div className="flex flex-col">
            <Navbar />

            <section className="px-20 py-24">
                <div className="flex justify-between">
                    <div>
                        <img className="mb-6" src="./Shape (1).png" alt="" />
                        <p className="text-[14px] mb-3 opacity-80">COMPANY</p>
                        <h2 className=" w-[550px]  text-[42px] font-bold mb-6">Award-winning Company seen and used by millions around the world.</h2>
                        <p className="opacity-60 text-[16px] w-[650px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
                    </div>
                    <div>
                        <img className="w-[40px]" src="./Shapes (1).png" alt="" />
                    </div>
                </div>

                <div className="flex gap-2 mt-10">
                    <img className="w-[350px]" src="./Image 1.png" alt="" />
                    <img className="w-[350px]" src="./Image 2.png" alt="" />
                    <div className="relative w-[350px]">
                        <img className="relative z-10 w-full" src="./Image 3.png" alt="" />
                        <img className="w-[300px] absolute -top-4 right-0 z-0" src="./Group 1710.png" alt="" />
                    </div>
                </div>

                <div className="flex gap-2 mt-30">
                    <div>
                        <img className="mb-6" src="./Shape.png" alt="" />
                        <p className="text-[14px] mb-3 font-bold opacity-80">Our Story 👇</p>
                        <h2 className="w-[550px] text-[42px] font-bold mb-6">From Startups to Titans of Industry</h2>
                        <p className="opacity-60 text-[16px] w-[500px]">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                    </div>
                    <div className="w-[550px] bg-[#FFD3AF91] grid grid-cols-2 px-20 py-15">
                        <img src="./Number 1.png" alt="" />
                        <img src="./Number 2.png" alt="" />
                        <img src="./Number 3.png" alt="" />
                        <img src="./Number 4.png" alt="" />
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#FAFAFC] mt-20 px-20">
                    <img src="./Logo (1).png" alt="" />
                    <img src="./Logo (2) copy.png" alt="" />
                    <img src="./Logo (3) copy.png" alt="" />
                    <img src="./Logo (4) copy.png" alt="" />
                    <img src="./Logo (5) copy.png" alt="" />
                </div>
            </section>
            <section className="flex px-20 py-24 bg-[#ECF8F9] justify-between items-center">
                <div className="w-[550px] flex flex-col">
                    <p className="text-[14px] mb-3 opacity-80">
                        ABOUT US
                    </p>

                    <h2
                        className="text-[42px] font-bold mb-6"
                    >
                        We want to get local identification in every corner of the world in this era of global citizenship.
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
                                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                            </p>
                        </div>
                    </div>

                    <div className=" bg-white  flex gap-6 p-10 py-6 ">
                        <div className="w-[100px]">
                            <img src="./Group 1750.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">Best Quality</h3>
                            <p className="opacity-60 text-[15px]">
                                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                            </p>
                        </div>
                    </div>

                    <div className=" bg-white  flex gap-6 p-10 py-6 ">
                        <div className="w-[100px]">
                            <img src="./Group 1751.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold text-xl">24/7 Support</h3>
                            <p className="opacity-60 text-[15px]">
                                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-20 py-24">
                <p className="text-[14px] mb-3 opacity-80">OUR VISION</p>
                <h2 className="w-[700px] text-[42px] font-bold mb-6">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
                <p className="opacity-60 text-[16px] w-[570px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                <img className="mt-15" src="./Image (4).png" alt="" />

                <div className="flex flex-col mt-20 -mb-48 relative z-10">
                    <p className="text-[14px] mb-3 opacity-80">MEET OUR TEAM</p>
                    <h2 className="w-[450px] text-[42px] font-bold mb-6">Teamwork is the only way we work </h2>
                    <p className="opacity-60 text-[16px] w-[450px] mb-10">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                    <div className="grid grid-cols-4 cursor-pointer">
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 1.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 2.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 3.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 4.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="relative group block">
                            <img className="back absolute top-0 -left-0 z-0" src="./Team Overlay.png" alt="" />
                            <img src="./Team 1.png" alt="" className="opacity-0 w-full h-full object-cover" /> 
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 6.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 7.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                        <Link to="/tema_template" className="block relative group">
                            <img src="./Team 8.png" alt="" className="w-full h-full object-cover" />
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}