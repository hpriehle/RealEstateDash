// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1975IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1975Icon(props: Ellipse1975IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"12"} cy={"12"} r={"12"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse1975Icon;
/* prettier-ignore-end */
