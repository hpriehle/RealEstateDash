// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon9Icon(props: Polygon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M16 0l15.588 28.5H.413L16 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Polygon9Icon;
/* prettier-ignore-end */
