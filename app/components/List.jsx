import React from "react";
import { items } from "./data";
import { motion } from "framer-motion";
const Card = ({ setCurrent, item }) => {
  return (
    <div className="inline-block w-full mb-4">
      <motion.img
        className="cursor-pointer w-full object-scale-down"
        onClick={() => setCurrent(item)}
        whileHover={{
          scale: 1.01,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{ scale: 0.99 }}
        src={item.url}
        layoutId={`card-${item.id}`}
      />
      <div></div>
    </div>
  );
};

export default function List({ setCurrent }) {
  return (
    <div className="p-4">
      <h1 className="text-center font-medium text-4xl mb-8">Images</h1>
      <div className="">
        {items.map((item) => (
          <Card key={item.id} setCurrent={setCurrent} item={item} />
        ))}
      </div>
    </div>
  );
}
