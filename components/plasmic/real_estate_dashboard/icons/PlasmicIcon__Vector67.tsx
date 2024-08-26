// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector67Icon(props: Vector67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 215 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".15"}
        d={"M0 1h214.498"}
        stroke={"currentColor"}
        strokeDasharray={"4 4"}
      ></path>
    </svg>
  );
}

export default Vector67Icon;
/* prettier-ignore-end */
