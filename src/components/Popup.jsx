import React from 'react';

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
        
        <div className="relative bg-white w-[550px] p-12 pr-14 z-10 shadow-lg flex flex-col pt-16">
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-white bg-[#232536] w-6 h-6 flex items-center justify-center font-bold text-sm cursor-pointer"
            >
                &#x2715;
            </button> 

            <h2 className="text-[32px] font-bold leading-tight mb-2 text-[#232536]">
                Have a Question ? <br/> Let's Get in Touch with us 👋
            </h2>
            <p className="text-[14px] opacity-60 mb-8">
                Fill up the form and the team will get back to within 24 hrs
            </p>

            <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <label className="text-[14px] opacity-60">Name</label>
                    <input type="text" placeholder="Paresh Srichandan" required className="border-b border-gray-300 pb-2 outline-none text-[16px] text-[#232536]" />
                </div>
                
                <div className="flex flex-col gap-1">
                    <label className="text-[14px] opacity-60">E-mail</label>
                    <input type="email" placeholder="Paresh@pixeto.com" required className="border-b border-gray-300 pb-2 outline-none text-[16px] text-[#232536]" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[14px] opacity-60">Subject</label>
                    <input type="text" placeholder="For web design work Enquire" className="border-b border-gray-300 pb-2 outline-none text-[16px] text-[#232536]" />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[14px] opacity-60">Message</label>
                    <input type="text" placeholder="Type your Message" className="border-b border-gray-300 pb-2 outline-none text-[16px] text-[#232536] placeholder-opacity-40" />
                </div>

                <button className="relative w-[180px] h-[50px] bg-[#444CFC] text-white flex items-center justify-center gap-2 mt-4 cursor-pointer hover:bg-blue-700 transition">
                    <div className="absolute top-0 left-0 flex">
                        <div className="w-[10px] h-[10px] bg-[#FFA155]"></div>
                        <div className="w-[10px] h-[10px] bg-[#FFD3AF]"></div>
                    </div>
                    <img src="/Shapes (1).svg" className="absolute top-0 left-0 w-4 h-4" alt="" />
                    
                    <span className="font-semibold text-[16px] z-10 pl-2">Send Message &rarr;</span>
                </button>
            </form>
        </div>
    </div>
  );
}
