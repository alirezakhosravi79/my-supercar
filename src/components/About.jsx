import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FadeRight } from "../utility/Animation";

import Aboutcar from "../assets/About.png";

function About() {
  return (
    <div className="bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 h-[650px] justify-center items-center">
          {/* hero img */}
          <div className="w-1/2">
            <motion.img
              initial={{ opacity: 0, x: 200, scale: 0.7 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.8, delay: 0.8 }}
              src={Aboutcar}
              alt=""
            />
          </div>

          {/* hero text */}
          <div className="w-1/2 flex flex-col px-8 space-y-5 justify-center">
            <motion.h3
            initial={{opacity:0 , x:200}}
            whileInView={{opacity:1 , x:0}}
            transition={{duration:0.8, delay:0.1}}
              className="text-red-500 text-xl"
            >
              On Demand Purchase___
            </motion.h3>
            <motion.h1
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-bold "
            >
              Experience the Thrill of
              <span className="text-red-500"> Super Cars</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(1)}
              initial="hidden"
              animate="visible"
              className="text-black text-lg"
            >
              Discover the world's most exclusive and high-performance vehicles.
              From blistering speed to unparalleled luxury, our super cars
              redefine the limits of automotive engineering.
            </motion.p>
            <div className="flex gap-4 items-center">
              <motion.button
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"
                className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center font-semibold"
              >
                Explors Models <ChevronRight />
              </motion.button>
              <motion.button
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"
                className="bg-white border border-red-500  text-red-500 py-2 px-4 rounded-full font-semibold"
              >
                Book a Test Drive
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
