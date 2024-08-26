// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon7Icon(props: Polygon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M7 0l6.062 6.75H.938L7 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Polygon7Icon;
/* prettier-ignore-end */
