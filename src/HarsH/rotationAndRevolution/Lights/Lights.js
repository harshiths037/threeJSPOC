import React from "react";

export default () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.3, 10, 10]} attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" />
      </mesh>
    );
  };

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.3} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};
