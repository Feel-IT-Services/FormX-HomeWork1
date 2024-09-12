import React, { useMemo } from 'react';
import { Typography, Slider, Box, SliderProps } from '@mui/material';

const sliderValueProps = {
  min: 0,
  max: (3 * Math.PI) / 2,
  step: 0.01,
};

interface Props extends SliderProps {
  label: string;
  onSliderChange: (value: number) => void;
}

const RotationSlider = ({ label, onSliderChange, ...props }: Props) => {
  const isVertical = useMemo(
    () => props.orientation === 'vertical',
    [props.orientation]
  );

  const onChange = (_: Event, newValue: number) => {
    onSliderChange(newValue);
  };

  return (
    <Box
      sx={{
        marginBottom: 2,
        height: isVertical ? '200px' : 'auto',
        width: isVertical ? '100%' : '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h5'>{label}</Typography>
      <Slider
        {...sliderValueProps}
        {...props}
        onChange={onChange}
        {...(isVertical && {
          sx: {
            '& input[type="range"]': {
              writingMode: 'vertical-rl',
              direction: 'rtl',
            },
          },
        })}
      />
    </Box>
  );
};

export default React.memo(RotationSlider);
