/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 pusheen.gltf
Author: porgy (https://sketchfab.com/porgy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pusheen-29c584aded38446f846b351be7d11c97
Title: Pusheen
*/

import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function Pusheen(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF(
    "app/3DComponents/pusheen/pusheen.gltf"
  );
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.455}
        >
          <group
            name="03d3141f73a1415c8fb3284a81209be1fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane032"
                  position={[-256.144, 45.38, 137.341]}
                  rotation={[0, 0.126, -3.107]}
                  scale={[10.63, 4.624, 77.451]}
                >
                  <mesh
                    name="Plane032_Material023_0"
                    geometry={nodes.Plane032_Material023_0.geometry}
                    material={materials["Material.023"]}
                  />
                </group>
                <group
                  name="Cylinder006"
                  position={[-39.475, 33.251, 156.217]}
                  rotation={[-1.987, 0, 0.105]}
                  scale={[114.214, 145.388, 33.324]}
                >
                  <mesh
                    name="Cylinder006_Material028_0"
                    geometry={nodes.Cylinder006_Material028_0.geometry}
                    material={materials["Material.028"]}
                  />
                </group>
                <group
                  name="Armature"
                  position={[105.676, 22.886, -78.482]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={32.607}
                >
                  <group name="Object_9">
                    <group
                      name="HandR_011_scaleCompensation"
                      position={[-5.565, -6.825, -4.491]}
                      scale={0.031}
                    >
                      <primitive object={nodes.HandR_011} />
                    </group>
                    <group
                      name="Bone-Mouth_012_scaleCompensation"
                      position={[-7.927, -5.837, -3.312]}
                      scale={0.031}
                    >
                      <primitive object={nodes["Bone-Mouth_012"]} />
                    </group>
                    <group
                      name="body_013_scaleCompensation"
                      position={[-3.031, -2.639, -3.534]}
                      scale={0.031}
                    >
                      <primitive object={nodes.body_013} />
                    </group>
                    <group
                      name="LegL_014_scaleCompensation"
                      position={[-0.261, -7.244, -2.225]}
                      scale={0.031}
                    >
                      <primitive object={nodes.LegL_014} />
                    </group>
                    <group
                      name="lollipop_015_scaleCompensation"
                      position={[-7.492, -6.266, -2.863]}
                      scale={0.031}
                    >
                      <primitive object={nodes.lollipop_015} />
                    </group>
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_11"
                      position={[166.052, 22.461, 3.393]}
                      scale={19.782}
                    />
                    <group
                      name="Cylinder001"
                      position={[0.013, -2.511, 1.852]}
                      rotation={[Math.PI / 2, 0, Math.PI / 2]}
                      scale={0.607}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials["Material.028"]}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials["Material.027"]}
                      skeleton={nodes.Object_13.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder004"
                  position={[31.273, 213.863, 136.456]}
                  rotation={[2.418, -0.05, -0.129]}
                  scale={[114.2, 145.388, 33.324]}
                >
                  <mesh
                    name="Cylinder004_Material028_0"
                    geometry={nodes.Cylinder004_Material028_0.geometry}
                    material={materials["Material.028"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("app/3DComponents/pusheen/pusheen.gltf");
