// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector76Icon(props: Vector76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 229 102"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".7"} filter={"url(#oWq_rXyal5HXa)"}>
        <path
          d={
            "M7 90.359c7.042-3.96 11.632-5.325 19.5-5.8 7.687-.466 11.836 4.041 19.5 3.23 8.065-.854 11.43-7.12 19.5-7.93 7.678-.77 11.885 4.807 19.5 3.451 8.649-1.54 10.742-12.57 19.499-12.408 9.034.166 10.47 14.296 19.5 13.95 10.209-.39 11.212-19.476 19.5-19.53 8.287-.055 10.655 13.287 19.5 12.935 12.853-.51 9.993-32.188 19.499-29.731 9.507 2.456 11.034 49.154 23.16 45.88 12.127-3.274 11.483-45.88 15.84-87.406"
          }
          stroke={"currentColor"}
          strokeWidth={"1.5"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <filter
          id={"oWq_rXyal5HXa"}
          x={".632"}
          y={".922"}
          width={"227.611"}
          height={"100.399"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"3"}
            result={"effect1_foregroundBlur_97_1748"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector76Icon;
/* prettier-ignore-end */
