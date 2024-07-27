import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {

  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  const text = "Say Hello";

  // const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('here');

    // e.preventDefault();
    // setError(false);
    // setSuccess(false);

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     form.current,
    //     process.env.NEXT_PUBLIC_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setSuccess(true);
    //       form.current.reset();
    //     },
    //     () => {
    //       setError(true);
    //     }
    //   );
  };



  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full p-14 gap-8 flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/5 pb-12 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="text-[40px] sm:text-[60px] lg:text-[80px]"
              >
                {letter}
              </motion.span>
            ))}
            <span className="text-[40px] pb-14 sm:text-[60px] lg:text-[80px]">😊</span>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          // ref={form}
          className="h-4/5 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-4"
        >
          <span>Hai Sapphire smith,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {/* {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )} */}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact