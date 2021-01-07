import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Cube from "./Cubes";

export default () => {
    const group = useRef();

    useFrame(() => {
        group.current.rotation.y += 0.003;
    });

    const nodesCubes = map(new Array(120), (el, i) => {
        return <Cube key={i} />;
    });

    return <group ref={group}>
        {nodesCubes}
    </group>;
};
