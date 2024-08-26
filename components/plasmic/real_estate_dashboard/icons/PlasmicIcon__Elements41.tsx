// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements41Icon(props: Elements41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M5.154 0h-.058C4.001 0 3.141 0 2.47.09 1.781.183 1.235.376.805.805c-.429.43-.622.976-.715 1.664C0 3.141 0 4.001 0 5.096v.058C0 6.249 0 7.109.09 7.78c.093.688.286 1.234.715 1.664.43.429.976.622 1.664.715.672.09 1.532.09 2.627.09h.058c1.095 0 1.955 0 2.627-.09.688-.093 1.234-.286 1.664-.715.429-.43.622-.976.715-1.664.09-.672.09-1.532.09-2.627v-.058c0-1.095 0-1.955-.09-2.627-.093-.688-.286-1.234-.715-1.664C9.015.376 8.469.183 7.78.09 7.109 0 6.249 0 5.154 0zm.471 7.125a.5.5 0 00.354-.854l-.647-.646L6.98 3.978a.5.5 0 00-.708-.707L4.625 4.918l-.646-.647a.5.5 0 00-.854.354l.001 2a.5.5 0 00.5.5h1.999z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements41Icon;
/* prettier-ignore-end */
