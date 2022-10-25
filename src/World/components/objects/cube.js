import {
  PlaneBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  ShaderMaterial,
} from "three";

//import simpleVert from '../shaders/simple.vert'
//import simpleFrag from '../shaders/simple.frag'

function createCube(
  color = "white",
  position = [0, 0, 0],
  meshType = "standard"
) {
  // create a geometry
  const geometry = new PlaneBufferGeometry(2, 2);

  // create a default (white) Basic material
  let material = "";
  switch (meshType) {
    case "standard":
      material = new MeshStandardMaterial({ color });
      break;
    case "basic":
      material = new MeshBasicMaterial({ color });
      break;
  }

  // import shader
  // const shaderOne = new ShaderMaterial({
  //   vertexShader: simpleVert,
  //   fragmentShader: simpleFrag
  // })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  //cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(position[0], position[1], position[2]);


  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    //cube.rotation.y += MathUtils.degToRad(30) * delta;
  };

  return cube;
}

export { createCube };
