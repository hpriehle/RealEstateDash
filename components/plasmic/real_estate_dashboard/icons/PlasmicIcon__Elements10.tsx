// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements10Icon(props: Elements10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.69 2.587c1.633.928 2.917 1.657 3.83 2.325.921.672 1.602 1.375 1.846 2.301.179.68.179 1.394 0 2.074-.244.926-.925 1.63-1.845 2.302-.914.667-2.198 1.396-3.83 2.324-1.578.896-2.908 1.652-3.918 2.081-1.018.433-1.946.653-2.848.397a4.003 4.003 0 01-1.751-1.034c-.66-.666-.924-1.585-1.05-2.692C0 11.567 0 10.13 0 8.3v-.1c0-1.829 0-3.267.124-4.365.126-1.107.39-2.026 1.05-2.692A4.004 4.004 0 012.925.11c.902-.256 1.83-.036 2.848.397 1.01.43 2.34 1.185 3.918 2.081z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements10Icon;
/* prettier-ignore-end */
