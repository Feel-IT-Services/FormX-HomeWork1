# 3D Cube Rotation Project

## Overview

This project demonstrates an interactive 3D cube using React and Three.js (via React Three Fiber). Users can rotate the cube horizontally and vertically using sliders, and click on cube faces to select colors.

## Features

- 3D cube rendering with React Three Fiber
- Interactive rotation controls (horizontal and vertical)
- Color selection by clicking on cube faces
- Smooth 270-degree rotation range for both axes

## Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm (v6.0.0 or later)

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/App.tsx`: Main component containing the canvas and sliders
- `src/components/Cube.tsx`: Cube component with rotation logic
- `src/components/RotationSlider.tsx`: Custom slider component for rotation controls
- `src/components/BlinkingDivider.tsx`: Custom blinking divider component to focus on the currently selected color

## Dependencies

- React
- @react-three/fiber
- @react-three/drei
- three
- @mui/material

## How It Works

The cube is rendered using React Three Fiber. Two sliders control the rotation:

- Horizontal rotation: 0 to 270 degrees (3π/2 radians)
- Vertical rotation: 0 to 270 degrees (3π/2 radians)

The rotation values are passed to the Cube component, which updates the cube's orientation in real-time. Clicking on a cube face will display the selected color.

## Customization

You can customize various aspects of the project:

- Cube appearance and behavior: Modify the `Cube.tsx` file to change the cube's appearance, colors, and rotation logic.
- Rotation controls: The rotation ranges are set to 270 degrees (3π/2 radians) in the `RotationSlider` component. To adjust these, you'll need to modify the `min` and `max` props in the `RotationSlider` component within `App.tsx`.
- Slider step: The step value for the sliders can be adjusted by changing the `step` prop in the `RotationSlider` components in `App.tsx`.
- Blinking Divider: Customize the blinking speed and color by modifying the `BlinkingDivider` component in `BlinkingDivider.tsx`.

Remember that changing the rotation ranges may require corresponding adjustments in the cube rotation logic to maintain the desired behavior.
