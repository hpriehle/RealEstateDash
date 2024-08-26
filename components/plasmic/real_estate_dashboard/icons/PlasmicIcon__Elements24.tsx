// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements24Icon(props: Elements24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M11.417 8.5a2.917 2.917 0 11-5.834 0 2.917 2.917 0 015.834 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={
          "M8.5 1C12.559 1 16 4.36 16 8.438c0 4.142-3.497 7.05-6.727 9.026a1.572 1.572 0 01-1.545 0C4.502 15.468 1 12.594 1 8.438 1 4.361 4.441 1 8.5 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Elements24Icon;
/* prettier-ignore-end */
