import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigte = useNavigate()

    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => { 
        setShow(!show);
        // console.log(show);
        
        
    };

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                console.log("test"); 
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-5 bg-white shadow" : "py-4"

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="sm:text-2xl text-xl font-bold">DCamera.</h1>
                </div>
            <ul className={`flex md:gap-12 gap-8 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-red-900 font-bold text-white transition-all`}>
                    <li className="flex items-center gap-3">
                    <i className="ri-home-3-line text-3xl md:hidden block"></i>
                        <a href="#introduction" className="font-medium opacity-75">Perkenalan</a>
                    </li>
                    <li className="flex items-center gap-3">
                    <i className="ri-information-line text-3xl md:hidden block"></i>
                        <a href="#history" className="font-medium opacity-75">Sejarah</a>
                    </li>
                    <li className="flex items-center gap-3">
                    <i className="ri-image-line text-3xl md:hidden block"></i>
                        <a href="#camera" className="font-medium opacity-75">Kamera</a>
                    </li>
                </ul>
                <div className="Login flex items-center gap-2">
                    <Link to="/LoginPage"  className="bg-red-900 px-5 py-2 rounded-full text-white font-bold hover:bg-red-950 transition-all">Login</Link>
                    <i className="ri-menu-3-line text-3xl md:hidden" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar