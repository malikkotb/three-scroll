import React from "react";
import { motion } from "framer-motion";

export default function Modal({ setCurrent, current }) {
  if (!current) {
    return <></>;
  }
  return (
    // inset-0 makes the div fill up the entire screen
    <div
      onClick={() => setCurrent(null)}
      className="fixed inset-0 bg-black/40 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        className="w-full max-w-[700px] mx-auto mt-80 px-8 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div layoutId={`card-${current.id}`}>
          <img src={current.url} />
        </motion.div>
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="bg-white p-4"
        >
          <p className="text-xl">{current.title}</p>
        </motion.div> */}
      </div>
    </div>
  );
}
