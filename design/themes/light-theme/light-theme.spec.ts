import { lightTheme } from './light-theme';

it('should return the light theme with correect primary color', () => {
  const theme = lightTheme();
  expect(theme.palette.primary.main).toEqual('#B32E29');
});
