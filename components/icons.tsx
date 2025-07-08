import { FC } from "react";

import { IconSvgProps } from "@/types";

export const Logo: FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const Star: FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 29"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="m14 .5 1.317 12.683L28 14.5l-12.683 1.317L14 28.5l-1.317-12.683L0 14.5l12.683-1.317L14 .5Z"
    />
  </svg>
);
