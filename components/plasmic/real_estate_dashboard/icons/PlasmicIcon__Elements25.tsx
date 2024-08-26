// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements25Icon(props: Elements25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 6.542c0-2.613 0-3.919.812-4.73C2.623 1 3.929 1 6.542 1c2.612 0 3.918 0 4.73.812.811.811.811 2.117.811 4.73 0 2.612 0 3.918-.811 4.73-.812.811-2.118.811-4.73.811-2.613 0-3.919 0-4.73-.811C1 10.46 1 9.154 1 6.542z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Elements25Icon;
/* prettier-ignore-end */
