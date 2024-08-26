// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector72Icon(props: Vector72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 463 161"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".7"}
        d={
          "M1 159.968c15.135-7.55 25-10.153 41.91-11.061 16.52-.887 25.437 7.708 41.908 6.161 17.334-1.629 24.567-13.578 41.909-15.123 16.504-1.47 25.545 9.168 41.909 6.581 18.59-2.938 23.089-23.971 41.909-23.663 19.417.318 22.502 27.263 41.91 26.604 21.941-.745 24.097-37.141 41.909-37.246 17.811-.104 22.9 25.34 41.909 24.67 27.624-.975 21.478-61.384 41.909-56.7 20.431 4.684 24.256 38.274 50.318 32.03C454.562 105.977 452.636 80.191 462 1"
        }
        stroke={"currentColor"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector72Icon;
/* prettier-ignore-end */
