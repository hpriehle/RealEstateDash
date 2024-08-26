// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements44Icon(props: Elements44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.185 7.628c-.632-1.102-.937-2.002-1.121-2.914-.272-1.349.35-2.667 1.382-3.508.436-.355.936-.234 1.194.229l.582 1.044c.462.828.692 1.242.646 1.68-.045.44-.356.797-.979 1.512L2.185 7.628zm0 0c1.28 2.23 3.287 4.24 5.52 5.52m0 0c1.102.632 2.002.937 2.914 1.121 1.35.273 2.667-.35 3.508-1.382.355-.436.234-.936-.229-1.194l-1.044-.582c-.828-.461-1.242-.692-1.68-.646-.44.046-.797.357-1.511.979l-1.958 1.704z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Elements44Icon;
/* prettier-ignore-end */
