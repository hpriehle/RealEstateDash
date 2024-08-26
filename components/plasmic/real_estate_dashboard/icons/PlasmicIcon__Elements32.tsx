// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements32Icon(props: Elements32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.6 6.159a.833.833 0 01-.767.508h-10a.833.833 0 01-.6-1.412L4.669.662c.117-.122.257-.267.393-.375.163-.129.42-.287.771-.287.351 0 .609.158.772.287.137.108.276.253.394.375l4.434 4.593c.232.24.298.596.167.904z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements32Icon;
/* prettier-ignore-end */
