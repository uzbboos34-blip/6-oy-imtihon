import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const pages = [
        "/",
        "/service",
        "/company",
        "/career",
        "/blog",
        "/contact_us"
    ];

    const currentIndex = pages.indexOf(location.pathname);
    const nextPath = currentIndex >= 0 ? pages[(currentIndex + 1) % pages.length] : pages[0];

    return (
        <nav className="bg-[#232536] flex justify-between gap-10 p-6 px-20">
            <img src="/Logo (2).png" alt="logo" />
            <div className="flex gap-10">
                <ul className="flex gap-10">
                    <NavLink to="/" className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Home
                    </NavLink>
                    <NavLink to="/service" className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Service
                    </NavLink>
                    <NavLink to="/company"  className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Company
                    </NavLink>
                    <NavLink to="/career" className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Career
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Blog
                    </NavLink>
                    <NavLink to="/contact_us" className={({ isActive }) => `text-white nav-link ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
                        Contact us
                    </NavLink>
                </ul>
                <div className="flex items-center gap-2">
                    <NavLink className="text-[#FFD3AF]" to={nextPath}>Clone project</NavLink>
                    <img className="w-5 h-2 mt-1" src="/Icon (1).png" alt="arrow icon" />
                </div>
            </div>
        </nav>
    )
}
