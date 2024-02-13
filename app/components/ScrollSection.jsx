"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import Modal from "./Modal";

function Item({ url, setCurrent, scale, ...props }) {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered ? 1 : 0,
      4,
      delta
    );
  });
  return (
    <motion.group {...props}>
      <Image
        ref={ref}
        onClick={() => setCurrent(item)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale}
        url={url}
      />
    </motion.group>
  );
}

function Items({ setCurrent }) {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Item
        setCurrent={setCurrent}
        url="./1.jpg"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 6, 0, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./2.jpg"
        scale={[2, w / 3, 1]}
        position={[w / 30, -h, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./3.jpg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./4.jpg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 4, -h * 1.2, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./5.jpg"
        scale={[w / 5, w / 5, 1]}
        position={[w / 10, -h * 1.75, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./6.jpg"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./7.jpg"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 2.6, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./8.jpg"
        scale={[w / 2, w / 2, 1]}
        position={[w / 4, -h * 3.1, 0]}
      />
      <Item
        setCurrent={setCurrent}
        url="./9.jpg"
        scale={[w / 2.5, w / 2, 1]}
        position={[-w / 6, -h * 4.1, 0]}
      />
    </Scroll>
  );
}

export default function ScrollSection() {
  const [current, setCurrent] = useState(null); // currently selected image

  return (
    <>
      <Modal current={current} setCurrent={setCurrent} />
      <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <ScrollControls damping={0} pages={5}>
          <Items setCurrent={setCurrent} />
          <Scroll html style={{ width: "100%" }}>
            <h1
              style={{
                position: "absolute",
                top: `100vh`,
                right: "20vw",
                fontSize: "25em",
                transform: `translate3d(0,-100%,0)`,
              }}
            >
              all
            </h1>
            <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
              hail
            </h1>
            <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
              thee,
            </h1>
            <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
              thoth
            </h1>
            <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
              her
              <br />
              mes.
            </h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
