import banner from "../assets/banner.jpg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="relative">
        <div
          style={{
            height: "600px",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
            zIndex: "-1",
          }}
        ></div>
        <motion.div
        initial={{opacity:0, scale:0.7}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, delay:0.2}}
        className="absolute top-10 left-32 mx-auto pl-16 w-[400px]">
          <h2 className="text-5xl text-white font-bold text-center mb-5">
            Contact <span className="text-red-500">us</span></h2>
            <form action="#" className="bg-red-50 rounded-lg p-10 space-y-4">
              <div className="flex flex-col gap-1">
                <label className="semi-bold">First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  className="p-1"
                  placeholder="Fist Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="semi-bold">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  className="p-1"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="semi-bold">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="p-1"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="semi-bold">Message:</label>
                <textarea
                  name="message"
                  className="p-1"
                  placeholder="Write Your Message"
                />
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Submit
              </button>
            </form>
          
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
