// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.93 8.203a.586.586 0 01-.586-.586V6.99a2.94 2.94 0 011.464-2.537c.543-.314.88-.898.88-1.523A1.76 1.76 0 002.93 1.172 1.76 1.76 0 001.172 2.93.586.586 0 010 2.93 2.933 2.933 0 012.93 0a2.933 2.933 0 012.93 2.93 2.94 2.94 0 01-1.465 2.537c-.542.314-.88.897-.88 1.523v.627a.586.586 0 01-.585.586z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
