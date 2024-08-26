// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements46Icon(props: Elements46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M14.333 7.667A6.667 6.667 0 101 7.667a6.667 6.667 0 0013.333 0z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={
          "M13 3.466c-.623.045-1.421.286-1.975 1.003-1 1.293-1.999 1.401-2.665.97-1-.647-.16-1.695-1.333-2.264C6.262 2.804 6.155 1.794 6.58 1M1 7c.508.441 1.22.845 2.06.845 1.732 0 2.079.332 2.079 1.656 0 1.325 0 1.325.347 2.318.225.646.304 1.293-.146 1.848m8.993-5.032c-.591-.34-1.333-.481-2.084.059-1.437 1.033-2.428.177-2.874 1.032-.657 1.259 1.689 1.655-.375 4.607"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements46Icon;
/* prettier-ignore-end */
