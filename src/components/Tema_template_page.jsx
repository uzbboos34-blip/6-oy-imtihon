import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Tema_template_page() {
    return (
        <div>
            <Navbar />
            <section className="px-20 py-24">
                <div className="flex flex-col gap-5 items-center">
                    <img src="./Image (20).png" alt="" />
                    <h3 className="text-[42px] font-bold">Javena Melo</h3>
                    <p className="text-[16px] opacity-60">CEO</p>
                    <p className="text-[16px] opacity-60">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                    <img src="./Socials.png" alt="" />
                </div>

            </section>

            <section className="flex flex-col px-20 py-24 bg-[#ECF8F9]">
                <img className="w-[20px] opacity-80" src="./Shape.png" alt="" />
                <h2 className="font-bold text-[48px]">
                    Blog posts from Javena
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

            <footer className="flex px-20 py-24 bg-white justify-between">
                <div className="flex flex-col max-w-[500px]">
                    <img className="w-[30px] mb-6" src="./Shapes (1).svg" alt="" />
                    <h2 className="text-[45px] font-bold leading-tight mb-8">
                        Let's make<br />something special
                    </h2>

                    <h3 className="text-[22px] mb-8">
                        Let's talk! <span className="text-2xl">🤙</span>
                    </h3>

                    <p className="text-[16px] mb-2">020 7993 2905</p>
                    <p className="text-[16px] mb-8">hi@finsweet.com</p>

                    <div className="w-[250px] h-[1px] bg-gray-200 mb-8"></div>

                    <p className="text-[14px] text-[#232536] font-medium leading-relaxed">
                        DLF Cybercity, Bhubaneswar,<br />
                        India, &52050
                    </p>
                </div>

                <div className="flex flex-col justify-between pt-[8px]">
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-4 text-[#232536]">
                            <Link to="/" className="font-bold text-[16px]">Home</Link>
                            <Link to="/service" className="font-bold text-[16px]">Service</Link>
                            <Link to="/company" className="font-bold text-[16px]">Company</Link>
                            <Link to="/career" className="font-bold text-[16px]">Career</Link>
                            <Link to="/news" className="font-bold text-[16px]">News</Link>
                        </div>

                        <div className="flex flex-col gap-4 text-[#232536]">
                            <h4 className="font-semibold text-[16px] mb-1">Service</h4>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Technical support</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Testing</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Development</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">AWS/Azure</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Consulting</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Information Technology</Link>
                        </div>

                        <div className="flex flex-col gap-4 text-[#232536]">
                            <h4 className="font-semibold text-[16px] mb-1">Resourses</h4>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">About Us</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Testimonial</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Privacy Policy</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Terms of use</Link>
                            <Link to="#" className="text-[14px] opacity-80 hover:opacity-100">Blog</Link>
                        </div>
                    </div>

                    <div className="flex justify-end w-full">
                        <Link to="/contact_us" className="flex items-center gap-2 text-[#232536]">
                            <div className="flex items-center h-[20px]">
                                <img src="./Shapes (5).png" alt="" />
                            </div>
                            <span className="font-semibold text-[16px]">Contact Us</span>
                            <img src="./Icon (2).png" alt="" />
                        </Link>
                    </div>
                </div>
            </footer>

            <footer className="bg-[#FFE6D2] flex justify-between gap-10 p-6 px-20">
                <div className="flex gap-15 items-center ">
                    <img src="/Logo (2).svg" alt="logo" />
                    <p className="font-medium text-sm mt-2 ">©2021 Finsweet</p>
                </div>
                <img src="./Social.png" alt="social" />
            </footer>
        </div>
    )
}