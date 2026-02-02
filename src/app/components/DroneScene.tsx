"use client";
import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";

// Extend JSX types for React Three Fiber
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
      directionalLight: any;
      hemisphereLight: any;
      primitive: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

type DroneSceneProps = {
  /**
   * Path to the drone model relative to the Vite base URL.
   * Put the file under `public/models/drone.glb` and keep the default.
   */
  modelUrl?: string;
  /**
   * Element whose scroll progress drives the animation.
   * Typically a tall wrapper around the hero.
   */
  scrollTargetRef: React.RefObject<HTMLElement | null>;
  className?: string;
};

type GLTFResult = {
  scene: THREE.Group;
};

function DroneModel({ url }: { url: string }) {
  const gltf = useGLTF(url) as unknown as GLTFResult;
  const ref = React.useRef<THREE.Group>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    ref.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // Handle multiple materials
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];

        materials.forEach((mat) => {
          if ('color' in mat) {
            const m = mat as THREE.MeshStandardMaterial;

            m.color.set(0xfffffff);      // silver base color
            m.metalness = 0.4;           // very metallic
            m.roughness = 0.2;           // slightly smooth for shine
            m.map = null;                // ignore textures if you want pure silver
          }
        });

        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, []);

  return <primitive ref={ref} object={gltf.scene} />;
}



// Easing function for Pixar-style overshoot (elastic ease-out)
function elasticEaseOut(t: number): number {
  if (t === 0 || t === 1) return t;
  
  const overshootAmount = 1.15; // How much to overshoot (15% beyond target)
  const bounceBack = 0.3; // Bounce back intensity
  
  // First 70% of animation: fast movement with overshoot
  if (t < 0.7) {
    const normalizedT = t / 0.7;
    return normalizedT * overshootAmount;
  }
  
  // Last 30%: elastic settle back to final position
  const normalizedT = (t - 0.7) / 0.3;
  const overshoot = overshootAmount - 1;
  return 1 + overshoot * Math.exp(-6 * normalizedT) * Math.cos(12 * normalizedT);
}

function DroneRig({
  progress,
  modelUrl,
}: {
  progress: () => number;
  modelUrl: string;
}) {
  const rigRef = React.useRef<THREE.Group | null>(null);
  const targetPos = React.useMemo(() => new THREE.Vector3(), []);
  const targetRot = React.useMemo(() => new THREE.Euler(), []);
  const animationCompleted = React.useRef(false);
  const startTime = React.useRef<number | null>(null);
  const finalPosition = React.useRef<{ x: number; y: number; z: number } | null>(null);
  const lastIsDesktop = React.useRef<boolean | null>(null);

  useFrame((state, delta) => {
    const rig = rigRef.current;
    if (!rig) return;

    const time = state.clock.getElapsedTime();
    
    // Check if screen size changed
    const isDesktop =
      typeof window !== "undefined" && window.innerWidth >= 1024;
    
    // Reset animation if screen orientation changes
    if (lastIsDesktop.current !== null && lastIsDesktop.current !== isDesktop) {
      animationCompleted.current = false;
      startTime.current = null;
      finalPosition.current = null;
    }
    lastIsDesktop.current = isDesktop;
    
    // Initialize start time on first frame
    if (startTime.current === null) {
      startTime.current = time;
    }
    
    const elapsedTime = time - startTime.current;

    const travelDuration = 2;
    
    let x: number;
    let y: number;
    let z: number;

    if (!animationCompleted.current) {
      // ANIMATION PHASE - only runs once
      const rawT = Math.min(elapsedTime / travelDuration, 1);
      const travelT = elasticEaseOut(rawT);

      if (isDesktop) {
        const startX = -3.5;
        const endX = 3.5;
        const settleX = 0.8; // Moved closer to center, in the right column area
        const baseY = 0.0; // Centered vertically
        const baseZ = 0.225;

        x = THREE.MathUtils.lerp(startX, endX, travelT);
        y = baseY;
        z = baseZ;

        // Store final position when animation completes
        if (rawT >= 1) {
          finalPosition.current = { x: settleX, y: baseY, z: baseZ };
          animationCompleted.current = true;
        }
      } else {
        const startY = -2.5;
        const endY = 2.0;
        const settleY = 0.5; // Position above the centered text on mobile
        const baseX = 0;
        const baseZ = 0.3; // Brought even closer for mobile

        x = baseX;
        y = THREE.MathUtils.lerp(startY, endY, travelT);
        z = baseZ;

        // Store final position when animation completes
        if (rawT >= 1) {
          finalPosition.current = { x: baseX, y: settleY, z: baseZ };
          animationCompleted.current = true;
        }
      }
    } else {
      // FLOATING PHASE - use stored final position
      if (finalPosition.current) {
        if (isDesktop) {
          x = finalPosition.current.x;
          y = finalPosition.current.y + 0.15 * Math.sin(time * 0.8);
          z = finalPosition.current.z;
        } else {
          x = finalPosition.current.x + 0.15 * Math.sin(time * 0.8);
          y = finalPosition.current.y;
          z = finalPosition.current.z;
        }
      } else {
        // Fallback (shouldn't happen)
        x = isDesktop ? 0.8 : 0;
        y = isDesktop ? 0.0 : -0.5;
        z = isDesktop ? 0.225 : 0.3;
      }
    }

    // Rotation
    let rx: number;
    let ry: number;
    let rz: number;

    if (!animationCompleted.current) {
      const rawT = Math.min(elapsedTime / travelDuration, 1);
      const speedFactor = rawT < 0.7 ? (1 - rawT / 0.7) * 0.5 : 0;
      rx = 0.15 + speedFactor;
      ry = -0.3;
      rz = isDesktop ? speedFactor : -speedFactor;
    } else {
      rx = 0.15 + 0.05 * Math.sin(time * 0.5);
      ry = -0.3 + 0.08 * Math.sin(time * 0.6);
      rz = 0.03 * Math.sin(time * 0.7);
    }
    const tiltX = 0.3; // forward tilt
    const tiltY = 0.18; // sideways slant

    rx += tiltX;
    ry += tiltY;
    const baseScale = isDesktop ? 3.4 : 2.7;
    const targetScale = baseScale;

    targetPos.set(x, y, z);
    targetRot.set(rx, ry, rz);

    // Smooth interpolation
    const kPos = 1 - Math.pow(0.001, delta);
    rig.position.lerp(targetPos, kPos);

    const kRot = 1 - Math.pow(0.001, delta);
    rig.rotation.x = THREE.MathUtils.lerp(rig.rotation.x, targetRot.x, kRot);
    rig.rotation.y = THREE.MathUtils.lerp(rig.rotation.y, targetRot.y, kRot);
    rig.rotation.z = THREE.MathUtils.lerp(rig.rotation.z, targetRot.z, kRot);

    // Smoothly scale towards target.
    const currentScale = rig.scale.x || baseScale;
    const nextScale = THREE.MathUtils.lerp(currentScale, targetScale, kPos);
    rig.scale.setScalar(nextScale);

    state.camera.lookAt(0, 0, 0);
  });

  return (
    
    <group ref={rigRef}>
      <DroneModel url={modelUrl} />
    </group>
  );
}

useGLTF.preload("/models/drone.glb");

export function DroneScene({
  modelUrl = "/models/drone.glb",
  scrollTargetRef,
  className,
}: DroneSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        shadows
        gl={{ alpha: true, antialias: true }}
      >
        
        <ambientLight intensity={0.5} />  // base light
<directionalLight 
  position={[5, 10, 5]} 
  intensity={1.5} 
  castShadow 
  shadow-mapSize={[2048, 2048]} 
/>
<directionalLight position={[-5, 5, -5]} intensity={0.8} />
<hemisphereLight skyColor="#ffffff" groundColor="#222222" intensity={0.6} />

        <DroneRig progress={() => 0.5} modelUrl={modelUrl} />
      </Canvas>
    </div>
  );
}