// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon10Icon(props: Polygon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M4.8 0l4.157 4.5H.643L4.8 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Polygon10Icon;
/* prettier-ignore-end */
