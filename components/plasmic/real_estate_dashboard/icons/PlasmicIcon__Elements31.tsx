// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements31Icon(props: Elements31IconProps) {
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
          "M.066.508A.833.833 0 01.833 0h10a.833.833 0 01.6 1.412L6.999 6.005a4.243 4.243 0 01-.394.374c-.163.13-.42.288-.772.288-.35 0-.608-.159-.772-.288a4.243 4.243 0 01-.393-.374L.234 1.412A.833.833 0 01.066.508z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements31Icon;
/* prettier-ignore-end */
