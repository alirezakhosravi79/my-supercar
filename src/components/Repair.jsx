import About from "../assets/Aboutx.webp";
import steering from "../assets/steering.png";
import battery from "../assets/battery.png";
import tyre from "../assets/tyre.png";
import maintenance from "../assets/maintenance.png";
import { motion } from "framer-motion";

function Repair() {
  return (
    <div className=" bg-red-50">
      <div className="max-w-7xl relative h-[650px] mx-auto pt-10">
        <motion.div 
        initial={{opacity:0, y:200}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, delay:0.5}}
        className="flex flex-col">
          <img src={About} alt="About" />
          <div
            className="p-2 flex flex-col space-y-2 w-52 mx-auto text-center justify-center
                absolute top-0 left-72"
          >
            <div className="bg-orange-50 mx-auto rounded-full">
              <img src={steering} alt="steering" className="w-20 p-2" />
            </div>
            <h3 className="font-semibold">Battery Repair</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h4 className="text-red-500">Read More</h4>
          </div>
          <div
            className="p-2 flex flex-col space-y-2 w-52 mx-auto text-center justify-center
                absolute top-48 right-0"
          >
            <div className="bg-orange-50 mx-auto rounded-full">
              <img src={battery} alt="battery" className="w-20 p-2" />
            </div>
            <h3 className="font-semibold">Battery Repair</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h4 className="text-red-500">Read More</h4>
          </div>
          <div
            className="p-2 flex flex-col space-y-2 w-52 mx-auto text-center justify-center
                absolute top-52 left-0"
          >
            <div className="bg-orange-50 mx-auto rounded-full">
              <img src={tyre} alt="tyre" className="w-20 p-2" />
            </div>
            <h3 className="font-semibold">Battery Repair</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h4 className="text-red-500">Read More</h4>
          </div>
          <div
            className="p-2 flex flex-col space-y-2 w-52 mx-auto text-center justify-center
                absolute top-0 right-72"
          >
            <div className="bg-orange-50 mx-auto rounded-full">
              <img src={maintenance} alt="maintenance" className="w-20 p-2" />
            </div>
            <h3 className="font-semibold">Battery Repair</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h4 className="text-red-500">Read More</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Repair;
