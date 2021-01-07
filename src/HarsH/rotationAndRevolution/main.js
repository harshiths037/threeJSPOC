import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
// import Credits from "./components/Credits";
import { Canvas } from "react-three-fiber";
import Cubes from "./Cubes/index";
import Lights from "./Lights/Lights";
import Environment from "./Environment/Environment";
import { OrbitControls, Stars } from 'drei';
import { Physics, useBox } from 'use-cannon';

function Main() {
    return (
        <>
            <Canvas>
                <Stars />
                <OrbitControls />
                <Physics>
                    <Cubes />
                    <Lights />
                    <Environment />
                </Physics>
            </Canvas>
        </>
    );
}

export default Main
