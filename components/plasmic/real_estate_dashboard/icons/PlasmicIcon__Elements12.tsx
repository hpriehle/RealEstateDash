// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements12Icon(props: Elements12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.333 1a7.333 7.333 0 017.334 7.333c0 5.5-7.334 11-7.334 11-.356-2.28-.704-3.503-1.833-5.5-1.1.51-1.375.917-1.833 2.063C2.833 13.833 1 11.083 1 8.333A7.333 7.333 0 018.333 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.5 5.583l3.667 3.667"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6.5 9.25h.008m3.65-3.667h.009"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements12Icon;
/* prettier-ignore-end */
