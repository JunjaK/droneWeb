import { indigo } from '@material-ui/core/colors';

interface PaletteColor {
	light?: string;
	main: string;
	dark?: string;
	contrastText?: string;
}

export default {
  primary: {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
  },
  secondary: {
    light: '#f6a5c0',
    main: '#f48fb1',
    dark: '#aa647b',
    contrastText: '#000',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
  },
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
  },
};
