import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CareerPageInner() {
    return (
        <div>
            <Navbar />
            <section className="px-20 py-24 flex flex-col">
                <div className="bg-white flex">
                    <div className="flex flex-col mt-8 ">
                        <p className="text-[14px] mb-3 opacity-70">CAREER AT ETHER</p>
                        <h2 className="text-[45px] font-bold leading-tight mb-5">Full Stack Developer</h2>
                        <p className="opacity-60 text-[16px] w-[400px]">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <button className="relative h-[50px] w-[150px] bg-[#444CFF] text-white flex items-center justify-center gap-2 text-sm mt-10">
                            <div className="absolute top-0 left-0 w-6 h-6">
                                <img src="./Shapes (1).svg" alt="" />
                            </div>

                            <span>Apply Now</span>
                            <img className="mt-1" src="./Icon (1).png" alt="" />
                        </button>
                    </div>
                    <div className="w-[515px] h-[324px] bg-[#FFE0C7] ml-25 flex justify-between">
                        <div className="flex flex-col gap-3 mt-20 ml-18">
                            <h3 className="font-bold text-xl mb-3">Job Description</h3>
                            <p className="opacity-70 text-[16px]">Remote, India , 4 to 5 Years Of Experience</p>
                            <p className="opacity-70 text-[16px]">Department: Product Engineering</p>
                            <p className="opacity-70 text-[16px]">Full Time 5 Position Available.</p>
                        </div>
                        <div>
                            <img className="w-[40px]" src="./Shapes (1).png" alt="" />
                        </div>

                    </div>
                </div>

                <div className="w-full bg-[#ECF8F9] mt-20">
                    <div className="flex gap-25 ml-75 h-12 mt-6">
                        <p className="text-[#454DFD]">Details</p>
                        <p className="font-bold">Requirements</p>
                        <p className="font-bold">Responsibilities</p>
                    </div>
                    <img className="ml-75 w-[50px]" src="./Underline.png" alt="" />
                    <div className="w-full h-[2px] bg-[#E0F1F2] mb-8"></div>

                    <div className="flex flex-col gap-5 p-10 ml-35 mb-10">
                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]"> Design & Create highly engaging industry-related content in both photo, gif & video format</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Publish Posts on various social media channels</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Promote content on social networks and monitor engagement (e.g. comments and shares)</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Research industry-related topics</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Editing audio and sound design on projects</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Engage in opportunities to develop original content and concepts for web and mobile</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</p>
                        </div>

                        <div className="flex gap-5">
                            <img className="w-[5px] h-[5px] mt-2" src="./Circle.png" alt="" />
                            <p className="w-[700px] opacity-70 text-[16px]">Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-[30px] font-bold mt-20 mb-5 ">Apply Now</h2>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-[#D2DAED2B] font-bold">
                        <input className="h-15 w-full p-5" type="text" placeholder="First Name" />
                    </div>
                    <div className="bg-[#D2DAED2B] font-bold">
                        <input className="h-15 w-full p-5" type="text" placeholder="Last Name" />
                    </div>
                    <div className="bg-[#D2DAED2B] font-bold">
                        <input className="h-15 w-full p-5" type="text" placeholder="Email Id" />
                    </div>
                    <div className="bg-[#D2DAED2B] font-bold">
                        <input className="h-15 w-full p-5" type="text" placeholder="Mobile No" />
                    </div>
                </div>
                <textarea
                    className="bg-[#D2DAED2B] font-bold h-[225px] w-full mt-5 p-4 resize-none"
                    placeholder="Why do you think you are a good fit for Ether?"
                />
                <div className="flex gap-2 mt-5">
                    <img className="w-[20px] h-[20px]" src="./Checkmark.png" alt="" />
                    <p className="opacity-70 text-[16px] w-[750px] ml-2">I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
                </div>
                <button className="relative h-[50px] w-[150px] bg-[#444CFF] text-white flex items-center justify-center gap-2 text-sm mt-8">
                    <div className="absolute top-0 left-0 w-6 h-6">
                        <img src="./Shapes (1).svg" alt="" />
                    </div>

                    <span>Apply Now</span>
                    <img className="mt-1" src="./Icon (1).png" alt="" />
                </button>

            </section>
            <Footer />
        </div>
    )
}
