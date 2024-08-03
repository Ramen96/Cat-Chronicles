/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 littleCat.gltf
Author: cacaoin3d (https://sketchfab.com/cacaoin3d)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/little-cat-1e6f360989b04b53a393f398d5372205
Title: Little Cat
*/

import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function LittleCat(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF(
    "app/3DComponents/little_cat/littleCat.gltf"
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
          scale={0.625}
        >
          <group name="LittleCatfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_26" />
                    <group name="Object_28" />
                    <group name="Object_30" />
                    <group name="Object_32" />
                    <group name="Object_34" />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials.Eyebrows}
                      skeleton={nodes.Object_31.skeleton}
                      morphTargetDictionary={
                        nodes.Object_31.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_31.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials.EyelidsTail_Cat}
                      skeleton={nodes.Object_35.skeleton}
                      morphTargetDictionary={
                        nodes.Object_35.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_35.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.Body}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.Eyes}
                      skeleton={nodes.Object_29.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.Ears_Cat}
                      skeleton={nodes.Object_33.skeleton}
                    />
                  </group>
                </group>
                <group name="Body" />
                <group name="Eyes" />
                <group name="Eyebrows" />
                <group name="Ears_Cat" />
                <group name="EyelidsTail_Cat" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("app/3DComponents/little_cat/littleCat.gltf");
