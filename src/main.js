import { createRenderer } from "./scene/renderer.js";
import { createScene } from "./scene/scene.js";
import { createCameras } from "./scene/camera.js";
import { addLights } from "./scene/light.js";
import { createJupiter } from "./objects/jupiter.js";

import * as THREE from 'three';

function init() {
    const renderer = createRenderer();
    document.body.appendChild(renderer.domElement);

    const scene = createScene();

    const {camera1} = createCameras();

    addLights(scene);

    const {mesh: jupiter} = createJupiter();
    scene.add(jupiter);

    renderer.render(scene, camera1);
}   

init();