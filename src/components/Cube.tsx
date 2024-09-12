import React, { useMemo, useRef } from 'react';
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { cubeColors } from '../constants/cubeColors';

interface Props {
  rotationX: number;
  rotationY: number;
  setActiveColor: (color: string | null) => void;
}

const Cube = ({ rotationX, rotationY, setActiveColor }: Props) => {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const cubeSises = useMemo(
    () => Math.min(viewport.width, viewport.height) * 0.4,
    [viewport]
  );

  const mappedCubeColors = useMemo(() => {
    return cubeColors.map((color, index) => (
      <meshStandardMaterial
        key={color}
        attach={`material-${index}`}
        color={color}
      />
    ));
  }, []);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const faceIndex = Math.floor((event.faceIndex || 0) / 2);

    setActiveColor(cubeColors[faceIndex]);
  };

  useFrame(() => {
    if (groupRef.current && meshRef.current) {
      // Apply horizontal rotation to the group
      groupRef.current.rotation.y = rotationY;

      // Apply vertical rotation to the mesh, but limit it to avoid flipping
      meshRef.current.rotation.x = rotationX;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} onClick={handleClick}>
        <boxGeometry args={[cubeSises, cubeSises, cubeSises]} />
        {mappedCubeColors}
      </mesh>
    </group>
  );
};

export default React.memo(Cube);
