import { Link } from "react-router-dom";
import { github, instagram, linkedin } from "../assets";
import { useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";



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

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const listVariant = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }
  const showClick = () => {
    console.log('here');

  }

  return (
    <div className="h-full w-screen  flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Navlink url={link.url} title={link.title} key={link.title} />
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
      {/* SOCIAL */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <Link to="https://github.com/SapphireSmith">
          <img src={github} alt="github" width={24} height={24} />
        </Link>
        <Link to="https://www.instagram.com/18sapphire/">
          <img src={instagram} alt="" width={24} height={24} />
        </Link>
        <Link to="https://www.linkedin.com/in/sapphiresmith/">
          <img src={linkedin} alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden ">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center text-4xl z-40"
          >
            {links.map((link) => (
              <Link className="" to={link.url}>
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <div className=" w-screen flex hover:bg-[#222] delay-100 duration-200 justify-center p-5 border-b-[0.1px] border-t-[0.1px] border-[#2b2b2b] items-center z-0" onClick={showClick}>
                    {link.title === 'About' ? 'About' : link.title}
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar