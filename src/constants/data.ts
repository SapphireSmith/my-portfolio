import {
    ai_sumz_1,
    ai_sumz_2,
    chatapp_1,
    chatapp_2,
    chatapp_3,
    multiplayer_game_1,
    multiplayer_game_2,
    multiplayer_game_3,
    nike_landing_1,
    nike_landing_2,
    nike_landing_3,
    sass_landing_1,
    sass_landing_2,
    sass_landing_3,
    tomato_food_app_1,
    tomato_food_app_2,
    tomato_food_app_3
} from "../assets/projects";

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
    techs: string[];
    link: string;
    github: string;
    img: string;
    newImage: ImageItem[];
}
export const items: PortfolioItem[] = [
    {
        id: 1,
        color: "from-red-500 to-blue-500",
        title: "Nike Landing page",
        desc: `Nike Landing page Developed using React.js and Tailwind css followed best practices to build clean and reusable code`,
        techs: ["React.js", "Tailwind CSS"],
        link: "https://nike-webpage-opal.vercel.app/",
        github: "https://github.com/SapphireSmith/Nike-webpage",
        img: nike_landing_1,
        newImage: [
            {
                id: 1,
                img: nike_landing_1,
                name: "nike-landing-1"
            },
            {
                id: 2,
                img: nike_landing_2,
                name: "nike-landing-2"
            },
            {
                id: 3,
                img: nike_landing_3,
                name: "nike-landing-3"
            }
        ]
    },
    {
        id: 2,
        color: "from-green-500 to-yellow-500",
        title: "Tomato: food ordering platform",
        desc: `Tomato: A Food Ordering Platform built using the MERN stack. 
               Features include login, signup, add to cart, Stripe payment gateway, view orders and order tracking.
               Additionally, an admin page was developed for easy product management, including adding,
               editing, and deleting products. Options for viewing order details and managing orders, 
               such as updating the order status to "Out for Delivery," "Delivered," etc., were also implemented.`,
        techs: ["React.js", "Tailwind CSS", "Redux", "Node.js", "Express.js", "MongoDB"],
        link: "https://food-ordering-platform-frontend-x58p.onrender.com/",
        github: "https://github.com/SapphireSmith/food_ordering_platform",
        img: tomato_food_app_1,
        newImage: [
            {
                id: 1,
                img: tomato_food_app_1,
                name: "tomato-food-1"
            },
            {
                id: 2,
                img: tomato_food_app_2,
                name: "tomato-food-2"
            },
            {
                id: 3,
                img: tomato_food_app_3,
                name: "tomato-food-3"
            }
        ]
    },
    {
        id: 3,
        color: "from-indigo-500 to-purple-500",
        title: "Chat App",
        desc: `Chat App built using the MERN stack. The complete UI, as shown in the screenshot, 
               is built using the popular UI library DaisyUI. Socket.IO was utilized for real-time messaging.
               As part of my learning process, I used both Zustand and Redux for state management. Implemented s
               ecure login and signup, as well as routing protection. MongoDB was used for securely storing user data.
               Added notification sounds for incoming messages and included animations when a message arrives.`,
        techs: ["React.js", "DaisyUI", "Tailwind CSS", "Redux", "Zustand", "Node.js", "Socket.IO", "Express.js", "MongoDB"],
        link: "https://chat-app-mern-fhab.onrender.com/",
        github: "https://github.com/SapphireSmith/chat-app-mern",
        img: chatapp_1,
        newImage: [
            {
                id: 1,
                img: chatapp_1,
                name: 'chat-app-1'
            },
            {
                id: 2,
                img: chatapp_2,
                name: 'chat-app-2'
            },
            {
                id: 3,
                img: chatapp_3,
                name: "chat-app-3"
            }
        ]
    },
    {
        id: 4,
        color: "from-blue-500 to-teal-500",
        title: "Online Multiplayer Game (Tic Tac Toe)",
        desc: `Multiplayer Game (Tic Tac Toe) built using Socket.IO. I focused purely on 
        the core functionality of the game rather than the design aspect. After countless 
        hours of research, I developed the game logic and handled edge cases such as player
         disconnections or exits by displaying a message to the opponent instead of crashing the game.
        Implemented match-making for players based on room logic in Socket.IO and optimized the server by
         deleting the room after the game ends. The game can end in two scenarios: player disconnection 
         or game end (in a draw or a win). Additional features include displaying the live total player count 
         and disabling user input if it's not the player's turn.
                 `,
        techs: ["React.js", "Zustand", "Node.js", "Socket.io", "Express.js"],
        link: "https://tic-tac-toe-multiplayer-client.onrender.com/",
        github: "https://github.com/SapphireSmith/tic-tac-toe-multiplayer",
        img: multiplayer_game_1,
        newImage: [
            {
                id: 1,
                img: multiplayer_game_1,
                name: "multiplayer-game-1"
            },
            {
                id: 2,
                img: multiplayer_game_3,
                name: "multiplayer-game-2"
            },
            {
                id: 3,
                img: multiplayer_game_2,
                name: "multiplayer-game-3"
            }
        ]
    },

    {
        id: 5,
        color: "from-purple-500 to-pink-500",
        title: "AI summarizer",
        desc: `Used React.js for frontend development and utilized the popular platform Rapid API
         (the largest API hub) for accessing the OpenAI GPT-3.5 model’s article summarizing API.
          With this API, you only need to paste the link to a lengthy article, and it will provide 
          a summarized essence of the content.`,
        techs: ["React.js", "Rapid API", "OpenAI API"],
        link: "https://ai-sumz12.netlify.app",
        github: "https://github.com/SapphireSmith/ai-sumz",
        img: ai_sumz_1,
        newImage: [
            {
                id: 1,
                img: ai_sumz_1,
                name: 'ai-sum-1'
            },
            {
                id: 2,
                img: ai_sumz_2,
                name: 'ai-sum-2'
            },
        ]
    },
    {
        id: 6,
        color: "from-gray-800 to-gray-500",
        title: "SASS Landing Page",
        desc: "A SASS landing page build using React.js and Tailwind CSS",
        techs: ["React.js", "Tailwind CSS"],
        link: "https://react-analyics.netlify.app/",
        github: "https://github.com/SapphireSmith/analatical-website-react",
        img: sass_landing_1,
        newImage: [
            {
                id: 1,
                img: sass_landing_1,
                name: 'sass_landing-1'
            },
            {
                id: 2,
                img: sass_landing_2,
                name: 'sass_landing-2'
            },
            {
                id: 3,
                img: sass_landing_3,
                name: "sass_landing-3"
            }
        ]
    },
];

interface Bio {
    about: string;
    quote: string;
}

interface Home {
    title: string;
    desc: string;
}

export const BIO: Bio = {
    about: ` I'm a Full Stack Developer, using React.js for frontend development 
    and Node.js for backend development. Like most developers around the world, 
    I am also self-taught. I started with C and C++, writing my first "Hello World" 
    in Turbo C++ IDE instead of VS Code editor (Yes, the one with the blue console
     where the mouse cursor would constantly hide after compiling...)
      For the past two years, I've been writing "Hello World" in JavaScript. 🤓`,
    quote: `Press any key to scroll down... 🖥️`
}

export const SKILLS: string[] = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Redux',
    'Zustand',
    'Next.js',
    'CSS',
    'HTML',
    'Tailwind CSS',
    'Bootstrap',
    'MUI',
    'Daisy UI',
    'Tailwind UI',
    'Framer Motion',
    'Node.js',
    'Express.js',
    'WebRTC',
    'Socket.io',
    'JWT',
    'MongoDB',
    'SQL',
    'Firebase',
    'Stripe payment',
    'Razorpay payment',
    'WIX ecommerce API Integration',
    'Git',
]


export const HOME: Home = {
    title: `I'm Sapphire smith, nice to meet you.`,
    desc: `
    I'm a Full Stack Developer dedicated to crafting 
    exceptional digital experiences. I'm focused on building 
    responsive full-stack web applications with a strong emphasis
    on frontend development using React and Next.js and Node.js and Express.js 
    in backend.
    `
}