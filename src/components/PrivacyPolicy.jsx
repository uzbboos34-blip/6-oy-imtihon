import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar />
            <section className="px-20 py-24 bg-white">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <img className="w-[20px] opacity-80" src="./Shape (1).png" alt="" />
                        <h2 className="text-[42px] font-bold">Privacy Policy</h2>
                        <p className="text-[16px] opacity-60">Last Updated  on 27th January 2021</p>
                    </div>
                    <img className="w-[30px] h-[30px] opacity-80" src="./Shapes (1).png" alt="" />
                </div>

                <div>
                    <div className="bg-[#ECF8F9] p-25 pl-40 flex flex-col gap-5 mt-20">
                        <h2 className="w-[800px] text-[38px] font-bold">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                        <p className="w-[800px] text-[16px] opacity-60">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                        <p className="w-[800px] text-[16px] opacity-60">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                        <p className="w-[800px] text-[16px] opacity-60">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                        <p className="w-[800px] text-[16px] opacity-60">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>
                        <h3 className="font-bold text-[20px]">We disclose your information in the following manner:</h3>
                        <p className="w-[800px] text-[16px] opacity-60">Business partners, suppliers and sub-contractors (“Affiliates”): Affiliates may use this information to help provide, understand, and improve our services and Affiliate’s own services for the performance of any contract we enter into </p>
                        <p className="w-[800px] text-[16px] opacity-60">Financial Institutions and Auditors: In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.</p>
                        <p className="w-[800px] text-[16px] opacity-60">Advertisers and Advertising Networks: To provide you with select and serv e relevant advertisements to you and others, we may share your data with advertiser sand advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them with aggregate information about our users (for example, we may inform them that any given number of participants in a specified age group who clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target.</p>


                    </div>
                    <img src="./Shapes (2) copy.png" alt="" />
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