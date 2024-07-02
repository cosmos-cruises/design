import { themeCreator } from '@showoff/design.theme.theme-creator';
import { alpha, Theme, ThemeOptions } from '@mui/material';
import { baseTheme } from '@cosmo-cruises/design.themes.base-theme';

/**
 * Function that returns a configured dark theme
 * @param additionalConfigurations - Additional configurations to be applied to the theme
 * @returns Configured dark theme
 */
export function darkTheme(additionalConfigurations?: ThemeOptions): Theme {
  return themeCreator(
    baseTheme(),
    {
      palette: {
        mode: 'dark',
        primary: {
          main: '#000000', // Black
        },
        text: {
          primary: '#FFFFFF', // White
          secondary: '#FF4F32', // Lighter Mars Red
        },
        background: {
          default: '#070414',
          paper: '#1B1827',
        },
        divider: '#2F2C3A',
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              ':hover': {
                backgroundColor: alpha('#FF0000', 0.35), // Mars Red
              },
              color: '#070414',
              '&.Mui-disabled': {
                backgroundColor: 'rgba(179, 46, 41, 0.35)', // Darker Mars Red
              },
            },
          },
        },
        MuiSwitch: {
          styleOverrides: {
            switchBase: {
              color: '#FF0000', // Mars Red
            },
            track: {
              opacity: 0.2,
              backgroundColor: '#FF0000', // Mars Red
              '$checked$checked + &': {
                opacity: 0.7,
                backgroundColor: '#FF0000', // Mars Red
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              color: '#FF0000', // Mars Red
            },
          },
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
              '&.Mui-selected': {
                backgroundColor: '#FF0000', // Mars Red
                '&:hover': {
                  backgroundColor: alpha('#FF0000', 0.8), // Darker Mars Red
                },
              },
            },
          },
        },
      },
      typography: {
        button: {
          color: '#FF0000', // Mars Red
        },
      },
    },
    { ...additionalConfigurations }
  );
}
