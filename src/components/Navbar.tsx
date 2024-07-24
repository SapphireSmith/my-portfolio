import { Link } from "react-router-dom";
import { dribbble, facebook, github, instagram, linkedin, pinterest } from "../assets";
import { useState } from "react";
import Navlink from "./Navlink";



const links: {
  url: string;
  title: string;
}[] = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Navlink title={link.title} url={link.url} key={link.title} />
          // <div>{link.title}</div>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          to="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Sapphire</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Smith
          </span>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* MENU LIST */}
        {open &&
          <div className=" absolute top-0 left-0 w-screen h-screen text-white flex flex-col justify-center gap-8 text-4xl items-center bg-black">
            {
              links.map((link) => (
                <Link to={link.url} key={link.title}>{link.title}</Link>
              ))
            }
          </div>
        }
      </div>


      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link to="/">
          <img src={github} alt="" width={24} height={24} />
        </Link>
        <Link to="/">
          <img src={dribbble} alt="" width={24} height={24} />
        </Link>
        <Link to="/">
          <img src={instagram} alt="" width={24} height={24} />
        </Link>
        <Link to="/">
          <img src={facebook} alt="" width={24} height={24} />
        </Link>
        <Link to="/">
          <img src={pinterest} alt="" width={24} height={24} />
        </Link>
        <Link to="/">
          <img src={linkedin} alt="" width={24} height={24} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar