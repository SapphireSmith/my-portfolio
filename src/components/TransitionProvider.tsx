import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode; }) => {
    const { pathname } = useLocation();

    return (
        <AnimatePresence mode="wait">
            <div
                key={pathname}
                className={`w-screen ${pathname === '/' ? 'h-[120vh]' : pathname === '/portfolio' ? 'h-[120vh]' : 'h-screen'} bg-gradient-to-b from-blue-100 to-red-100`}
            >
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl sm:text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {pathname === '/' ? <span className="text-4xl sm:text-6xl md:text-8xl">Back To Home</span> : ''}
                    {pathname.substring(1)}
                </motion.div>
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 1 } }}
                />
                {children}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;