import { atoms } from '../../theme/sprinkles.css';

export const container = atoms({
  display: 'flex',
  paddingX: 'small',

  // Conditional atoms:
  flexDirection: {
    mobile: 'column',
    desktop: 'row',
  },
  background: {
    lightMode: 'blue-50',
    darkMode: 'gray-700',
  }
});