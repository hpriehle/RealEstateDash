// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements45Icon(props: Elements45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4.333 4.333l1.962 1.16c1.143.676 1.6.676 2.744 0L11 4.333"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M1.01 7.65c.044 2.044.066 3.066.82 3.823.754.757 1.804.783 3.903.836 1.293.033 2.574.033 3.868 0 2.099-.053 3.148-.08 3.902-.836.755-.757.776-1.779.82-3.823.014-.657.014-1.31 0-1.967-.044-2.044-.066-3.066-.82-3.823-.754-.757-1.803-.783-3.902-.836a76.746 76.746 0 00-3.868 0c-2.1.053-3.149.08-3.903.836-.754.757-.776 1.78-.82 3.823-.014.657-.014 1.31 0 1.967z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements45Icon;
/* prettier-ignore-end */
