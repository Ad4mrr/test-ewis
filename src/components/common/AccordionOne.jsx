/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import done from "../../../assets/icon/done.webp";
import dot from "../../assets/doted.svg";

import { useState } from "react";
import { motion } from "framer-motion";


import { BoltIcon } from "@heroicons/react/24/outline";
function AccordionOne(props) {
  const [show, setShow] = useState(props.con);
  function showFun() {
    setShow(!show);
  }
  return (
    <div className="flex flex-row items-start justify-start gap-5">
      <div className="flex flex-col items-center justify-start gap-2">
        <div className="w-6 h-6">
          <BoltIcon className="text-primary"/>
        </div>

        {show ? (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 60,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img  src={dot} alt="" />
          </motion.div>
        ) : (<motion.div
          initial={{
            height: 60,
            opacity: 1,
          }}
          animate={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img  src={dot} alt="" />
        </motion.div>)}
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <button
          className="text-primary font-bold font-Poppins text-xl leading-tight text-left "
          onClick={showFun}
        >
          {props.title}
        </button>
        <div>
          {show && (
            <motion.div
              className="font-Rubik  text-gray-500  text-sm text-left"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 60,
                opacity: 1,
              }}
              transition={{
                
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {props.des}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionOne;