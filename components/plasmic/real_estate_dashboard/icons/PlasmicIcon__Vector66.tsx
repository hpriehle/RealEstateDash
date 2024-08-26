// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector66Icon(props: Vector66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 461 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".15"}
        d={"M0 1h461"}
        stroke={"currentColor"}
        strokeDasharray={"4 4"}
      ></path>
    </svg>
  );
}

export default Vector66Icon;
/* prettier-ignore-end */
