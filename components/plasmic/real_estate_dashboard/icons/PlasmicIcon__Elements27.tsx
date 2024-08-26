// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements27Icon(props: Elements27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M5.946 0h.067C7.29 0 8.294 0 9.078.105c.803.108 1.44.334 1.94.835.501.5.727 1.137.835 1.94.105.784.105 1.788.105 3.066v.067c0 1.277 0 2.281-.105 3.065-.108.803-.334 1.44-.834 1.94-.501.501-1.138.727-1.941.835-.784.105-1.788.105-3.065.105h-.067c-1.278 0-2.282 0-3.065-.105-.804-.108-1.44-.334-1.941-.834-.5-.501-.727-1.138-.835-1.941C0 8.294 0 7.29 0 6.013v-.067C0 4.668 0 3.664.105 2.88.213 2.077.44 1.44.94.94c.5-.5 1.137-.727 1.94-.835C3.665 0 4.669 0 5.947 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements27Icon;
/* prettier-ignore-end */
