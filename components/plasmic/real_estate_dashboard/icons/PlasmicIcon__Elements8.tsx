// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements8Icon(props: Elements8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 9.708c0-4.105 0-6.157 1.275-7.433C3.551 1 5.603 1 9.708 1s6.158 0 7.433 1.275c1.276 1.276 1.276 3.328 1.276 7.433s0 6.158-1.276 7.433c-1.275 1.276-3.327 1.276-7.433 1.276-4.105 0-6.157 0-7.433-1.276C1 15.866 1 13.814 1 9.708z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>
    </svg>
  );
}

export default Elements8Icon;
/* prettier-ignore-end */
