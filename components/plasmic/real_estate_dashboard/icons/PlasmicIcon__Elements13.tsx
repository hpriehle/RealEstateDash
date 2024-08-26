// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements13Icon(props: Elements13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.167 15.667c-1.222.57-2.826.916-4.584.916a12.38 12.38 0 01-2.75-.3C1.383 15.951 1 15.098 1 13.73V3.854c0-.902.953-1.522 1.833-1.32.843.192 1.773.3 2.75.3 1.758 0 3.362-.347 4.584-.917C11.388 1.347 12.993 1 14.75 1c.977 0 1.907.107 2.75.3 1.45.332 1.833 1.185 1.833 2.554v9.875c0 .903-.953 1.523-1.833 1.321a12.38 12.38 0 00-2.75-.3c-1.757 0-3.362.346-4.583.917z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M12.458 8.792a2.292 2.292 0 11-4.583 0 2.292 2.292 0 014.583 0z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M4.208 9.708v.009m11.917-1.849v.008"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements13Icon;
/* prettier-ignore-end */
