// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements17Icon(props: Elements17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"5.167"}
        cy={"5.167"}
        r={"4.167"}
        stroke={"currentColor"}
        strokeWidth={".6"}
      ></circle>

      <path
        d={"M5.167 3.5v1.667L6 6"}
        stroke={"currentColor"}
        strokeWidth={".6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements17Icon;
/* prettier-ignore-end */
