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
      className="fixed inset-0 bg-black/10 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        className="w-full max-w-[700px] mx-auto mt-20 px-8 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div layoutId={`image-${current.id}`}>
          <img src={current.url} />
        </motion.div>
      </div>
    </div>
  );
}
