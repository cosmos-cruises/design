import React from 'react';
import { useTheme } from '@mui/material';

export type LogoProps = {
  backgroundColor?: string;
  textColor?: string;
} & React.SVGProps<SVGSVGElement>;

export function Logo({ backgroundColor, textColor, ...rest }: LogoProps) {
  const theme = useTheme();
  const primaryColor = backgroundColor || theme.palette.primary.main;
  const textPrimary = textColor || theme.palette.background.paper;
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="20" cy="20" r="20" fill={primaryColor} />
      <path
        d="M14 26 V10 L20 22 L26 10 V26"
        stroke={textPrimary}
        strokeWidth="2"
      />
    </svg>
  );
}
