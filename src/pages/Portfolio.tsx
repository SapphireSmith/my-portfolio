import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { items } from "../constants/data";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Portfolio = () => {
  const [bgColor, setBgColor] = useState(items[0].color);
  const [selectedImages, setSelectedImages] = useState<string[]>(items.map(item => item.img));
  const [selectedImageId, setSelectedImageId] = useState<string | null>('');

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView1) setBgColor(items[0].color);
    else if (inView2) setBgColor(items[1].color);
    else if (inView3) setBgColor(items[2].color);
    else if (inView4) setBgColor(items[3].color);
    else if (inView5) setBgColor(items[4].color);
    else if (inView6) setBgColor(items[5].color);
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

  const handleImageClick = (index: number, img: string, imgId: string) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = img;
    setSelectedImages(newSelectedImages);
    setSelectedImageId(imgId);
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen relative">
        <div className="h-[90vh] pb-32 flex items-center justify-center text-6xl lg:text-8xl text-center">
          My Works
        </div>
      </div>
      <div className={`flex flex-col rounded-t-2xl items-center ${bgColor}`}>
        {items.map((item, index) => (
          <div
            className="w-screen flex px-8 sm:px-16 py-14 items-center justify-center bg-gradient-to-r"
            key={item.id}
            ref={[ref1, ref2, ref3, ref4, ref5, ref6][index]}
          >
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                {item.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-3 pt-5">
                <div className="md:w-1/2">
                  <LazyLoadImage
                    effect="blur"
                    src={selectedImages[index]}
                    alt={item.title}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex gap-2 mt-2">
                    {item.newImage.map((image) => (
                      <div
                        key={image.id}
                        className={` ${selectedImageId === image.id + image.name ? 'border-[4px] border-yellow-400 flex justify-center rounded-[13px]' : ''
                          }`}
                      >
                        <LazyLoadImage
                          effect="blur"
                          src={image.img}
                          alt={`${image.id + image.name}`}
                          className="object-cover w-full h-16 md:h-20 border-2 rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(index, image.img, (image.id + image.name))}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2 justify-between gap-4 pb-2">
                  <p className="flex flex-col gap-4">
                    {item.desc}
                    <ol>
                      <p className="font-bold" >Technology used</p>
                      {
                        item.techs.map((tech) => (
                          <li key={tech} className="pl-1">{tech}</li>
                        ))
                      }
                    </ol>
                  </p>
                  <div className="flex gap-4 justify-end">
                     <Link to={item.link}>
                      <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">
                        See Demo
                      </button>
                    </Link >
                    <Link to={item.github}>
                      <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">
                        GitHub
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-screen h-screen flex flex-col gap-11 items-center justify-center text-center">
        <h1 className="text-5xl  lg:text-8xl">Do you have a project?</h1>
        <div className="relative ">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-52 h-52 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                React Developer and Node Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            to="https://www.linkedin.com/in/sapphiresmith/"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>      </div>
    </motion.div>
  );
};

export default Portfolio;
