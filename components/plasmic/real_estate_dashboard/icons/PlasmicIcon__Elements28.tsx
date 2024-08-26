// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements28Icon(props: Elements28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M8.7 2.15c-.356.726-.592 1.77-.592 2.954 0 1.184.236 2.228.591 2.955.372.76.783 1.015 1.072 1.015.289 0 .7-.255 1.072-1.015.355-.727.59-1.77.59-2.955 0-1.184-.235-2.228-.59-2.954-.372-.761-.783-1.016-1.072-1.016-.29 0-.7.255-1.072 1.016zm-.992-.508C8.138.761 8.836 0 9.77 0c.935 0 1.632.761 2.063 1.642.447.916.708 2.14.708 3.462s-.26 2.547-.708 3.462c-.43.881-1.128 1.642-2.063 1.642-.935 0-1.633-.76-2.063-1.642C7.26 7.651 7 6.426 7 5.104s.26-2.546.708-3.462z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.91.822C7.34.368 8.79 0 9.77 0a.437.437 0 110 .875c-.389 0-.859.327-1.258 1.125-.386.772-.637 1.869-.637 3.104 0 1.236.251 2.333.637 3.104.4.798.87 1.125 1.259 1.125a.437.437 0 110 .875c-.981 0-2.431-.368-3.862-.821a60.771 60.771 0 01-4.017-1.458A3.028 3.028 0 010 5.104C0 3.87.733 2.742 1.892 2.28A60.772 60.772 0 015.909.822z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.87 7.296c.319.04.546.331.506.65a2.878 2.878 0 001.46 2.877l1.133.624a.583.583 0 01-.563 1.022l-1.133-.624a4.045 4.045 0 01-2.055-4.042.584.584 0 01.651-.507z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements28Icon;
/* prettier-ignore-end */
