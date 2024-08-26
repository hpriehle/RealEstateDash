// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector0IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector0Icon(props: Vector0IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M15 29.54A14.54 14.54 0 1129.54 15H15v14.54z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector0Icon;
/* prettier-ignore-end */
