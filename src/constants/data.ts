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
    link: string;
    img: string
    github:string
    newImage: ImageItem[];
}

export const items: PortfolioItem[] = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Nike Landing page",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://nike-webpage-opal.vercel.app/",
        github:"https://github.com/SapphireSmith/Nike-webpage",
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
        color: "from-blue-300 to-violet-300",
        title: "Tomato: food ordering platform",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://food-ordering-platform-frontend-x58p.onrender.com/",
        github:"https://github.com/SapphireSmith/food_ordering_platform",
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
        color: "from-violet-300 to-purple-300",
        title: "Online Multiplayer Game (Tic Tac Toe)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://tic-tac-toe-multiplayer-client.onrender.com/",
        github:"https://github.com/SapphireSmith/tic-tac-toe-multiplayer",
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
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Chat App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://chat-app-mern-fhab.onrender.com/",
        github:"https://github.com/SapphireSmith/chat-app-mern",
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
        color: "from-purple-300 to-red-300",
        title: "AI summarizer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://ai-sumz12.netlify.app",
        github:"https://github.com/SapphireSmith/ai-sumz",
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
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "SASS Landing Page",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        link: "https://react-analyics.netlify.app/",
        github:"https://github.com/SapphireSmith/analatical-website-react",
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