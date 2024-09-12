import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const BlinkingDivider = styled(Divider)(() => ({
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  animation: 'blink 1s linear infinite',
}));

export default BlinkingDivider;
