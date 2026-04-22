import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Career() {
    return (
        <div>
            <Navbar />

            <section className="px-20 py-24 flex flex-col items-center">
                <div className="flex justify-between w-[1100px]">
                    <div className=" w-[550px] flex flex-col items-center ml-70">
                        <p className="w-[500px] text-[14px] mb-3 opacity-80 text-center">CAREER AT FINSWEET</p>
                        <h2 className=" w-[500px]  text-[42px] font-bold mb-6 text-center">We hired people who are Always Passionate about what they do</h2>
                        <p className="opacity-60 text-[16px] w-[550px] text-center">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                    </div>
                    <div>
                        <img className="w-[40px]" src="./Shapes (1).png" alt="" />
                    </div>
                </div>
                <img className="w-[1000px] mt-20" src="./Image (5).png" alt="" />
                <p className="text-[16px] mb-3 opacity-80 mt-15">See Our open positions </p>
                <p className="text-[20px] mb-3">👇</p>

                <div className="bg-[#ECF8F9] w-full grid grid-cols-3 p-20 gap-6 mt-20">
                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Full Stack Developer</p>
                        <p className="opacity-60 mb-3">Bengaluru · Full Time </p>
                        <p className="opacity-60 mb-3">$10K - $18K · No equity</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Testing Engineer</p>
                        <p className="opacity-60 mb-3">Remote · Full Time  </p>
                        <p className="opacity-60 mb-3">$08K - $10K · No equity</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Hr Manager</p>
                        <p className="opacity-60 mb-3">Mumbai . Fultime </p>
                        <p className="opacity-60 mb-3">$08K - $10K · 4 to 5 Yrs Exp</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Product Designer</p>
                        <p className="opacity-60 mb-3">Mumbai . Fultime</p>
                        <p className="opacity-60 mb-3">$08K - $10K · 4 to 5 Yrs Exp</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Wordpress Developer</p>
                        <p className="opacity-60 mb-3">Mumbai, Full Time </p>
                        <p className="opacity-60 mb-3">$08K - $10K · 4 to 5 Yrs Exp</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>


                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Jr. QA Tester</p>
                        <p className="opacity-60 mb-3">California, USA . Full Time</p>
                        <p className="opacity-60 mb-3">$14K - $23K · No equity</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Sr. UX Designer</p>
                        <p className="opacity-60 mb-3">California, USA . Full Time </p>
                        <p className="opacity-60 mb-3">$14K - $23K · No equity</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>


                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Social Media Manager</p>
                        <p className="opacity-60 mb-3">Kolkata, India .  Fulltime</p>
                        <p className="opacity-60 mb-3">$5K - $6K ·  Fresher</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>

                    <div className="p-10 bg-white w-[300px] h-[230px]">
                        <p className="font-bold mb-3">Golang Developer</p>
                        <p className="opacity-60 mb-3">Mumbai . Fultime</p>
                        <p className="opacity-60 mb-3">$08K - $10K · 4 to 5 Yrs Exp</p>
                        <Link to="/career-page-inner" className="flex items-center gap-2 mt-10">
                            <button className="text-[#444CFF]">Apply Now</button>
                            <img className="w-[20px] mt-1" src="./Icon (2).png" alt="" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-20 py-24 flex flex-col bg-[#FAFAFC]">
                <h4 className="text-[14px] mb-3 opacity-80">OUR WORK & CULTURE</h4>
                <h2 className="w-[600px] text-[42px] font-bold mb-6">Come and join a team of highly skilled professionals.</h2>
                <p className="opacity-60 text-[16px] w-[550px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>

                <div className=" grid grid-cols-3 mt-10 gap-3">
                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon.png" alt="" />
                        <p className="font-bold mb-3">Covid-19 insurance</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon (1).png" alt="" />
                        <p className="font-bold mb-3">Flexible working hours</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon (2).png" alt="" />
                        <p className="font-bold mb-3">Work from home</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon (3).png" alt="" />
                        <p className="font-bold mb-3">Annual retreats</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon (4).png" alt="" />
                        <p className="font-bold mb-3">Learning stipend</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                    <div className="bg-white p-10">
                        <img className="mb-3" src="./Culture Icon (5).png" alt="" />
                        <p className="font-bold mb-3">Gym membership</p>
                        <p className="opacity-60">Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>

                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}
