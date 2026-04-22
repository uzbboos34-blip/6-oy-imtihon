import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <section className="px-20 py-24 bg-white">
                <div className="flex">
                    <div className="w-[630px]">
                        <div>
                            <img src="./Shape (1).png" alt="" />
                            <p className="text-[14px] mb-3 opacity-80 mt-6">CONTACT US</p>
                            <h2 className=" w-[550px]  text-[42px] font-bold mb-6">Have a Question ?<br /> Let’s Get in Touch with us 👋</h2>
                            <p className="opacity-60 text-[16px] w-[650px]">Fill up the Form  and ou team will get back to within 24 hrs</p>
                        </div>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="opacity-60 text-[16px]">Name</p>
                            <p className=" text-[16px]">Paresh Srichandan</p>
                            <img className="w-[400px]" src="./Line.png" alt="" />
                        </div>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="opacity-60 text-[16px]">E-mail</p>
                            <p className=" text-[16px]">Paresh@pixeto.com</p>
                            <img className="w-[400px]" src="./Line.png" alt="" />
                        </div>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="opacity-60 text-[16px]">Subject</p>
                            <p className=" text-[16px]">For web design work Enquire </p>
                            <img className="w-[400px]" src="./Line.png" alt="" />
                        </div>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="opacity-60 text-[16px]">Message</p>
                            <p className=" text-[16px] opacity-30 mb-15">Type your Messege</p>
                            <img className="w-[400px]" src="./Line.png" alt="" />
                        </div>

                        <button className="relative h-[50px] w-[200px] bg-[#444CFF] text-white flex items-center justify-center gap-2 mt-10">
                            <div className="absolute top-0 left-0 w-6 h-6">
                                <img src="./Shapes (1).svg" alt="" />
                            </div>

                            <span>Request Quote</span>
                            <img src="./Icon (1).png" alt="" />
                        </button>
                    </div>

                    <div className="relative">
                        <img className="absolute z-0 -top-5 right-0" src="./Shapes.png" alt="" />
                        <div className="relative z-10 bg-[#666DFF] w-[500px] h-[645px] p-25">
                            <div className="mb-8">
                                <p className="opacity-50 text-white mb-2">Location</p>
                                <div className="bg-[#00000014] w-full h-[1px] mb-4"></div>
                                <h3 className="text-white w-[250px] text-[18px]">DLF Cybercity, Bhubaneswar,
                                    India, &52050</h3>
                            </div>
                            <div className="mb-8">
                                <p className="opacity-50 text-white mb-2">Working Hour</p>
                                <div className="bg-[#00000014] w-full h-[1px] mb-4"></div>
                                <h3 className="text-white w-[250px] text-[18px]">Monday To Friday</h3>
                                <h3 className="text-white w-[250px] text-[18px]">9:00 AM to 8:00 PM</h3>
                                <p className="text-white w-[350px] opacity-60">Our Support Team is available 24Hrs</p>
                            </div>
                            <div className="mb-13">
                                <p className="opacity-50 text-white mb-2">Contact Us</p>
                                <div className="bg-[#00000014] w-full h-[1px] mb-4"></div>
                                <h3 className="text-white w-[250px] text-[18px]">020 7993 2905</h3>
                                <h3 className="text-white w-[250px] text-[18px]">Hello@ether.com</h3>
                            </div>
                            <img src="./Social copy.png" alt="" />
                        </div>
                        <img className="w-[20px] h-[300px] absolute z-20  -left-5 top-86" src="./Shapes (1) copy.png" alt="" />

                    </div>
                </div>
                <img className="mt-30 mt-10" src="./Map Section.png" alt="" />

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
        </>
    )
}