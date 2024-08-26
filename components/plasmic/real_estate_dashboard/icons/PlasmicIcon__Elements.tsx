// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ElementsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ElementsIcon(props: ElementsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.756 1.128c.785-.574 1.537-.92 2.41-.92.875 0 1.626.346 2.411.92.762.557 1.62 1.38 2.703 2.418l.03.028 2.148 1.986v4.487c0 1.531 0 2.744-.127 3.694-.132.977-.408 1.768-1.032 2.391-.624.624-1.415.9-2.391 1.032-.95.128-2.163.128-3.694.128H9.12c-1.532 0-2.745 0-3.694-.128-.977-.131-1.768-.408-2.392-1.032-.623-.623-.9-1.414-1.031-2.391-.128-.95-.128-2.162-.128-3.694V5.56l2.15-1.986.028-.028c1.083-1.038 1.941-1.86 2.703-2.418zm2.407 10.747a1.04 1.04 0 00-1.038 1.042 1.04 1.04 0 001.038 1.041 1.05 1.05 0 001.045-1.041 1.05 1.05 0 00-1.045-1.042z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.617 2.305c-.673.492-1.46 1.245-2.588 2.326L1.41 8.101A.833.833 0 11.257 6.898l3.662-3.511C4.993 2.357 5.86 1.525 6.633.96 7.437.372 8.231 0 9.167 0c.935 0 1.73.372 2.533.96.773.565 1.64 1.396 2.714 2.427l3.663 3.512A.833.833 0 0116.923 8.1l-3.619-3.47c-1.128-1.081-1.915-1.834-2.588-2.326-.652-.477-1.104-.638-1.55-.638-.445 0-.896.16-1.549.638z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ElementsIcon;
/* prettier-ignore-end */
