import { alpha, Theme, ThemeOptions } from '@mui/material';
import { themeCreator } from '@cosmo-cruises/design.themes.theme-creator';
import { baseTheme } from '@cosmo-cruises/design.themes.base-theme';

/**
 * Function that returns a configured light theme
 * @param additionalConfigurations - Additional configurations to be applied to the theme
 * @returns Configured light theme
 */
export function lightTheme(additionalConfigurations?: ThemeOptions): Theme {
  return themeCreator(
    baseTheme(),
    {
      palette: {
        mode: 'light',
        primary: {
          main: '#B32E29', // Mars Red
        },
        background: {
          default: '#FFFFFF',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#000000', // Black
        },
        divider: '#BABEC9',
      },
      components: {
        MuiChip: {
          styleOverrides: {
            root: {
              color: '#B32E29', // Mars Red
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              ':hover': {
                backgroundColor: alpha('#B32E29', 0.35), // Mars Red
              },
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(179, 46, 41, 0.35)', // Darker Mars Red
            },
          },
        },
        MuiToggleButton: {
          styleOverrides: {
            root: {
              '&.Mui-selected': {
                backgroundColor: '#B32E29', // Mars Red
                '&:hover': {
                  backgroundColor: alpha('#B32E29', 0.8), // Darker Mars Red
                },
              },
            },
          },
        },
      },
      typography: {
        allVariants: {
          color: '#000000', // Black
        },
      },
    },
    { ...additionalConfigurations }
  );
}
