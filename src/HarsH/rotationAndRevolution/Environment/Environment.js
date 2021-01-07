import React from "react";
import { BackSide,FrontSide,DoubleSide } from "three";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[6, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0xd2452b}
        attach="material"
        side={BackSide}
        metalness={0.3}
      />
    </mesh>
  );
};
