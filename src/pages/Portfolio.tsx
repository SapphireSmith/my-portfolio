import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ImageItem {
  id: number;
  img: string;
  name: string;
}

interface PortfolioItem {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
  newImage: ImageItem[];
}

const items: PortfolioItem[] = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    newImage: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/25561062/pexels-photo-25561062/free-photo-of-white-flowers-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom1th-1"
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/16221198/pexels-photo-16221198/free-photo-of-reflection-of-couple-on-balcony-in-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom1th-2"
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/8408542/pexels-photo-8408542.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom1th-3"
      }
    ]
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    newImage: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/25561062/pexels-photo-25561062/free-photo-of-white-flowers-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom2th-1"
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/16221198/pexels-photo-16221198/free-photo-of-reflection-of-couple-on-balcony-in-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom2th-2"
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/8408542/pexels-photo-8408542.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom2th-3"
      }
    ]
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
    newImage: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/25561062/pexels-photo-25561062/free-photo-of-white-flowers-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom3th-1"
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/16221198/pexels-photo-16221198/free-photo-of-reflection-of-couple-on-balcony-in-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom3th-2"
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/8408542/pexels-photo-8408542.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom3th-3"
      }
    ]
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
    newImage: [
      {
        id: 1,
        img: "https://images.pexels.com/photos/25561062/pexels-photo-25561062/free-photo-of-white-flowers-in-the-sun.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: 'imagefrom4th-1'
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/16221198/pexels-photo-16221198/free-photo-of-reflection-of-couple-on-balcony-in-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: 'imagefrom4th-2'
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/8408542/pexels-photo-8408542.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "imagefrom4th-3"
      }
    ]
  },
];

const Portfolio = () => {
  const [bgColor, setBgColor] = useState(items[0].color);
  const [selectedImages, setSelectedImages] = useState<string[]>(items.map(item => item.img));
  const [selectedImageId, setSelectedImageId] = useState<string | null>('');

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView1) setBgColor(items[0].color);
    else if (inView2) setBgColor(items[1].color);
    else if (inView3) setBgColor(items[2].color);
    else if (inView4) setBgColor(items[3].color);
  }, [inView1, inView2, inView3, inView4]);

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
            ref={[ref1, ref2, ref3, ref4][index]}
          >
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl">
                {item.title}
              </h1>
              <div className="flex flex-col md:flex-row gap-3 pt-5">
                <div className="md:w-1/2">
                  <img
                    src={selectedImages[index]}
                    alt={item.title}
                    className="object-cover rounded-lg"
                  />
                  <div className="flex gap-2 mt-2">
                    {item.newImage.map((image) => (
                      <div
                        key={image.id}
                        className={`h-14 min-[500px]:h-20 ${selectedImageId === image.id + image.name ? 'border-[4px] border-yellow-400 rounded-[13px]' : ''
                          }`}
                      >
                        <img
                          src={image.img}
                          alt={`${image.id + image.name}`}
                          className="object-cover w-full h-full rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(index, image.img, (image.id + image.name))}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2 justify-between gap-4 pb-2">
                  <p className="">
                    {item.desc}
                  </p>
                  <div className="flex gap-4 justify-end">
                    <Link to={item.link}>
                      <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">
                        See Demo
                      </button>
                    </Link>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-screen h-screen flex flex-col gap-11 items-center justify-center text-center">
        <h1 className="text-5xl  lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-52 h-52 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            to="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
