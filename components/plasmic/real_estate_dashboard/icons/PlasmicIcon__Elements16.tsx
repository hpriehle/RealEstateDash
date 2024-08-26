// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements16Icon(props: Elements16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 5.667c0-2.2 0-3.3.683-3.984C2.367 1 3.467 1 5.667 1h.666c2.2 0 3.3 0 3.984.683C11 2.367 11 3.467 11 5.667V7c0 2.2 0 3.3-.683 3.983-.684.684-1.784.684-3.984.684h-.666c-2.2 0-3.3 0-3.984-.684C1 10.3 1 9.2 1 7V5.667z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
      ></path>

      <path
        d={
          "M11 4.27l.084-.069c1.41-1.164 2.116-1.745 2.683-1.464.566.28.566 1.212.566 3.075v1.043c0 1.863 0 2.794-.566 3.075-.567.281-1.272-.3-2.683-1.465L11 8.396"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
      ></path>

      <circle
        cx={"7.333"}
        cy={"4.667"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        r={"1"}
      ></circle>
    </svg>
  );
}

export default Elements16Icon;
/* prettier-ignore-end */
