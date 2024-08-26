// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon8Icon(props: Polygon8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M4 0l3.464 3.75H.536L4 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Polygon8Icon;
/* prettier-ignore-end */
