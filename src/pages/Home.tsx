import { hero } from "../assets";
import { motion } from 'framer-motion';
import { HOME } from "../constants/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const emojis = ["😁", "🙂", "🫡", "🤔", "😊", "😏", "😷", "🤠", "🤓"];
const animations = ['animate-bounce', 'animate-fade', 'animate-spin', 'animate-scale'];

const getRandomAnimation = () => animations[Math.floor(Math.random() * animations.length)];

const Home = () => {
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(getRandomAnimation());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
      setCurrentAnimation(getRandomAnimation());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 gap-5 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 z-10">
          <img src={hero} alt="Hero" className="w-full h-full object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full pt-28 lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hi <span className={`${currentAnimation}`}>{emojis[currentEmojiIndex]}</span>, {HOME.title}
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            {HOME.desc}
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 pb-8">
            <Link to={'/portfolio'}>
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link to={'/contact'}>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
