/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 gatochan.gltf
Author: chained_tan (https://sketchfab.com/ch_fren)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/gatochan-2650d5fd620548a1ba05721e2d6ee610
Title: Gatochan
*/

import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function Gatochan(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF(
    "app/3DComponents/gatochan/gatochan.gltf"
  );
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="bone" position={[0, -0.053, 0]} scale={0.621}>
              <primitive object={nodes.bone_rootJoint} />
              <group
                name="body"
                position={[0, -4.72, 7.799]}
                rotation={[0.235, 0, 0]}
                scale={0.771}
              />
              <skinnedMesh
                name="body_0"
                geometry={nodes.body_0.geometry}
                material={materials.coat}
                skeleton={nodes.body_0.skeleton}
              />
              <skinnedMesh
                name="body_1"
                geometry={nodes.body_1.geometry}
                material={materials.black}
                skeleton={nodes.body_1.skeleton}
              />
              <skinnedMesh
                name="body_2"
                geometry={nodes.body_2.geometry}
                material={materials.raw_color}
                skeleton={nodes.body_2.skeleton}
              />
              <skinnedMesh
                name="body_3"
                geometry={nodes.body_3.geometry}
                material={materials["coat.001"]}
                skeleton={nodes.body_3.skeleton}
              />
              <skinnedMesh
                name="body_4"
                geometry={nodes.body_4.geometry}
                material={materials["raw_color.002"]}
                skeleton={nodes.body_4.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("app/3DComponents/gatochan/gatochan.gltf");
