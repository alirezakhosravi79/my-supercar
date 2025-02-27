import hero from "../assets/Herocar3.png";
import { ChevronRight, Zap, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { FadeRight, FadeLeft, FadeUp } from "../utility/Animation";

function Hero() {
  return (
    <div className="bg-[#201f1f] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 h-[650px] justify-center items-center">
          {/* hero text */}
          <div className="w-1/2 flex flex-col px-8 space-y-5 justify-center">
            <motion.h3
              variants={FadeRight(0.5)}
              initial="hidden"
              animate="visible"
              className="text-red-500 text-xl"
            >
              On Demand Purchase___
            </motion.h3>
            <motion.h1
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-bold text-white"
            >
              Experience the Thrill of
              <span className="text-red-500"> Super Cars</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(1)}
              initial="hidden"
              animate="visible"
              className="text-white text-sm"
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
                className="bg-white  text-black py-2 px-4 rounded-full font-semibold"
              >
                Book a Test Drive
              </motion.button>
            </div>
            <motion.div
              variants={FadeUp(1.8)}
              initial="hidden"
              animate="visible"
              className="flex text-white pt-7 gap-5"
            >
              <div className="flex items-center">
                <Gauge className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">Top Speed: 350 km/h</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">0-100 km/h: 2.5s</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">
                  Engine: V12 Twin-Turbo
                </span>
              </div>
            </motion.div>
          </div>
          {/* hero img */}
          <div className="w-1/2">
            <motion.img 
            initial={{opacity:0, x:200, scale:0.7}}
            whileInView={{opacity:1, x:0, scale:1}}
            transition={{duration:1.8, delay:0.8}}
            src={hero} alt="" />
          </div>
        </div>
        <motion.div
          variants={FadeUp(2)}
          initial="hidden"
          animate="visible"
          className="bg-white border border-gray-300 shadow-lg rounded-md absolute -bottom-10 w-[1050px] mx-auto p-4"
        >
          <div className="flex gap-3 items-center">
            <div className="grid gap-5 grid-cols-4 flex-grow">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Brand Name</label>
                <select className="border border-gray-300 rounded-sm p-1">
                  <option value="">Select Option</option>
                  <option value="">Mercedes</option>
                  <option value="">BMW</option>
                  <option value="">Lamborgini</option>
                  <option value="">Porshe</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Select Type</label>
                <select className="border border-gray-300 rounded-sm p-1">
                  <option value="">Select Option</option>
                  <option value="">Mercedes</option>
                  <option value="">BMW</option>
                  <option value="">Lamborgini</option>
                  <option value="">Porshe</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Select Model</label>
                <select className="border border-gray-300 rounded-sm p-1">
                  <option value="">Select Option</option>
                  <option value="">Mercedes</option>
                  <option value="">BMW</option>
                  <option value="">Lamborgini</option>
                  <option value="">Porshe</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Transmission</label>
                <select className="border border-gray-300 rounded-sm p-1">
                  <option value="">Select Option</option>
                  <option value="">Mercedes</option>
                  <option value="">BMW</option>
                  <option value="">Lamborgini</option>
                  <option value="">Porshe</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Transmission
              </label>
              <button className="bg-red-500 transition-all ease-in rounded-sm text-white hover:bg-black hover:text-white px-3 h-8 py-1">
                Order Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
