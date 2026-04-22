import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Footer() {
    return <>
        <section className="flex flex-col px-20 py-24 bg-white pb-0">
            <div className="flex">
                <div className="bg-[#666DFF] w-[1080px] h-[333px] py-10">
                    <img className="absolute -mt-10 w-[60px] h-[60px] " src="./Shapes (3).png" alt="" />

                    <div className="flex mt-6">
                        <div className="pt-10">
                            <p className="text-white text-[15px] px-20 opacity-80 mb-2">NEWSLETTER</p>
                            <h3 className="text-white text-[33px] px-20 w-[550px]">Subscribe our News Letter
                                to get Latest Updates.</h3>
                        </div>

                        <div className="flex gap-4 mt-22">
                            <input type="text" placeholder="Paresh@Pixeto.com" className="w-[400px] h-[50px] bg-white pl-8 outline-none" />
                        </div>
                    </div>
                </div>
                <img src="./Shapes (4).png" alt="" />
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
                        <NavLink to="/" className={({ isActive }) => `font-bold text-[16px] w-max`}>Home</NavLink>
                        <NavLink to="/service" className={({ isActive }) => `font-bold text-[16px] w-max`}>Service</NavLink>
                        <NavLink to="/company" className={({ isActive }) => `font-bold text-[16px] w-max`}>Company</NavLink>
                        <NavLink to="/career" className={({ isActive }) => `font-bold text-[16px] w-max`}>Career</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => `font-bold text-[16px] w-max`}>News</NavLink>
                    </div>

                    <div className="flex flex-col gap-4 text-[#232536]">
                        <h4 className="font-semibold text-[16px] mb-1">Service</h4>
                        <HashLink smooth  to="/service#technical_support" className="text-[14px] w-max opacity-80">Technical support</HashLink>
                        <HashLink smooth  to="/service#development" className="text-[14px] w-max opacity-80">Development</HashLink>
                        <HashLink smooth to="/service#aws_azure" className="text-[14px] w-max opacity-80">AWS/Azure</HashLink>
                        <HashLink smooth to="/service#consulting" className="text-[14px] w-max opacity-80">Consulting</HashLink>
                        <HashLink smooth to="/service#information_technology" className="text-[14px] w-max opacity-80">Information Technology</HashLink>
                    </div>

                    <div className="flex flex-col gap-4 text-[#232536]">
                        <h4 className="font-semibold text-[16px] mb-1">Resourses</h4>
                        <Link to="/company" className="text-[14px] w-max opacity-80">About Us</Link>
                        <Link to="/company" className="text-[14px] w-max opacity-80">Testimonial</Link>
                        <Link to="/privacy_policy" className="text-[14px] w-max opacity-80">Privacy Policy</Link>
                        <Link to="/privacy_policy" className="text-[14px] w-max opacity-80">Terms of use</Link>
                        <Link to="/blog" className="text-[14px] w-max opacity-80">Blog</Link>
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

}