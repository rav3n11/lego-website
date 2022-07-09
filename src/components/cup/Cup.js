import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Mug from "../../assets/animations/ourCup.glb";

let container,
  camera,
  scene,
  renderer,
  orbitControls;

const init = () => {
  scene = new THREE.Scene();

  // Note: The near and far planes can be set this way due to the use of "logarithmicDepthBuffer" in the renderer below.
  camera = new THREE.PerspectiveCamera(
    30,
    container.offsetWidth / container.offsetHeight,
    1e-5,
    1e10
  );

  scene.add(camera);

  const hemispheric = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  scene.add(hemispheric);

  // RENDERER
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerHeight * 1.2, window.innerHeight * 1.2);
  renderer.outputEncoding = THREE.sRGBEncoding;

  container.appendChild(renderer.domElement);

  const loader = new GLTFLoader();

  const cameraPos = new THREE.Vector3(-0.2, 0.4, 1.4);
  orbitControls = new OrbitControls(camera, renderer.domElement);

  loader.load(Mug, (gltf) => {
    const object = gltf.scene;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Center the model on screen based on bounding box information.
    object.updateMatrixWorld();
    const boundingBox = new THREE.Box3().setFromObject(object);
    const modelSizeVec3 = new THREE.Vector3();
    boundingBox.getSize(modelSizeVec3);
    const modelSize = modelSizeVec3.length();
    const modelCenter = new THREE.Vector3();
    boundingBox.getCenter(modelCenter);

    // Set up mouse orbit controls.
    orbitControls.reset();
    orbitControls.maxDistance = modelSize + 10;
    orbitControls.enabled = false;
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.26;
    orbitControls.rotateSpeed = 1.05;
    orbitControls.panSpeed = 1.05;
    orbitControls.screenSpacePanning = true;
    orbitControls.autoRotate = true;
    orbitControls.minDistance = modelSize + 10;

    // Position the camera accordingly.
    object.position.x = -modelCenter.x;
    object.position.y = -modelCenter.y;
    object.position.z = -modelCenter.z;
    camera.position.copy(modelCenter);
    camera.position.x += modelSize * cameraPos.x;
    camera.position.y += (modelSize + 5) * cameraPos.y;
    camera.position.z += modelSize * cameraPos.z;
    camera.near = modelSize / 100;
    camera.far = modelSize * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(modelCenter);

    scene.background = null;
    scene.add(object);
    onWindowResize();
  });
};

const onWindowResize = () => {
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
};

const Cup = () => {
  const animate = useCallback(() => {
    requestAnimationFrame(() => animate());

    orbitControls.update();
    renderer.render(scene, camera);
  }, []);

  const ref = useRef(null);

  useEffect(() => {
    container = ref.current;
    const resizeHandler = () => onWindowResize();

    init();
    animate();

    window.addEventListener("resize", resizeHandler, false);

    return () => {
      window.removeEventListener("resize", resizeHandler, false);
    };
  }, [animate]);

  return (
    <div className="preview" style={{ color: "#fff" }}>
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: 10,
          left: -(window.innerWidth / 7),
        }}
      />
    </div>
  );
};

export default Cup;
