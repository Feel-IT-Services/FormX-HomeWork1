import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Typography, Box, Grow } from '@mui/material';
import Cube from './components/Cube';
import RotationSlider from './components/RotationSlider';
import { capitalizeFirstLetter } from './utils/capitalizeFirst';
import BlinkingDivider from './components/BlinkingDivider';

const App: React.FC = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grow in={!!activeColor} timeout={500}>
        <Box display='flex' alignItems='center' gap={1} width='350px'>
          <Typography variant='h5'>Selected Color:</Typography>
          <Typography variant='h5'>
            {capitalizeFirstLetter(activeColor)}
            <BlinkingDivider orientation='horizontal' color='white' />
          </Typography>
        </Box>
      </Grow>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            width: '350px',
            height: '350px',
            position: 'relative',
          }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube
              rotationX={rotationX}
              rotationY={rotationY}
              setActiveColor={setActiveColor}
            />
            <OrbitControls enableRotate={false} />
          </Canvas>
        </Box>
        <Box position='absolute' top='50px' right='-200px'>
          <RotationSlider
            label='Vertical Rotation'
            value={rotationX}
            onSliderChange={setRotationX}
            orientation='vertical'
          />
        </Box>
      </Box>
      <RotationSlider
        label='Horizontal Rotation'
        value={rotationY}
        onSliderChange={setRotationY}
      />
    </Box>
  );
};

export default App;
