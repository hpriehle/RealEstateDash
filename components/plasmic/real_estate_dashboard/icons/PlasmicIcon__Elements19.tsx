// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements19Icon(props: Elements19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.44 5.543A.75.75 0 019.75 6h-9a.75.75 0 01-.54-1.27L4.201.595c.106-.11.232-.24.354-.337C4.702.142 4.935 0 5.25 0c.316 0 .548.142.695.259.122.097.248.227.354.337l3.99 4.133a.75.75 0 01.151.814z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements19Icon;
/* prettier-ignore-end */
