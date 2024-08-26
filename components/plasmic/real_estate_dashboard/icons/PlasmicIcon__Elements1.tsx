// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements1Icon(props: Elements1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M9.25 1h.008M9.25 3.75h.008M9.25 6.5h.008M9.25 9.25h.008M9.25 12h.008m-.008 2.75h.008"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3.75 4.667c.617-1.028 1.455-1.834 2.743-1.834 5.448 0 2.386 11 8.24 11 1.298 0 2.13-.81 2.767-1.833"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M17.5 17.5H7.417c-3.025 0-4.538 0-5.477-.94C1 15.62 1 14.108 1 11.083V1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Elements1Icon;
/* prettier-ignore-end */
