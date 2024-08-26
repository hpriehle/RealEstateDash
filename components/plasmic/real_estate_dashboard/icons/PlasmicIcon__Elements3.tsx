// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements3Icon(props: Elements3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.218 5.477a1.741 1.741 0 11-3.482 0 1.741 1.741 0 013.482 0z"}
        stroke={"currentColor"}
        strokeWidth={"1.023"}
      ></path>

      <path
        d={
          "M5.477 1c2.422 0 4.476 2.006 4.476 4.44 0 2.472-2.087 4.207-4.015 5.387a.938.938 0 01-.922 0C3.09 9.636 1 7.921 1 5.44 1 3.006 3.054 1 5.477 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.023"}
      ></path>
    </svg>
  );
}

export default Elements3Icon;
/* prettier-ignore-end */
