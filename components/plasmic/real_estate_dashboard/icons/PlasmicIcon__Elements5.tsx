// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements5Icon(props: Elements5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.146 10.032V11h-.23a.917.917 0 000 1.833h6.417c.794 0 1.566-.257 2.2-.733l2.2-1.65a1.834 1.834 0 011.1-.367h6.417a.917.917 0 100-1.833h-.23c-.004-.853-.019-1.566-.08-2.165-.083-.814-.256-1.493-.653-2.087a4.354 4.354 0 00-1.201-1.202c-.595-.397-1.274-.57-2.087-.653-.795-.08-1.79-.08-3.044-.08h-2.84c-1.685 0-3.019 0-4.063.14-1.075.144-1.945.449-2.63 1.135-.687.686-.991 1.556-1.136 2.63-.14 1.045-.14 2.379-.14 4.064z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.583 3.667a.917.917 0 01-.916-.917V.917a.917.917 0 111.833 0V2.75c0 .506-.41.917-.917.917zm-11 0a.917.917 0 01-.916-.917V.917a.917.917 0 111.833 0V2.75c0 .506-.41.917-.917.917zm2.75 12.375a2.292 2.292 0 01-4.583 0v-4.125a.917.917 0 111.833 0v4.125a.458.458 0 00.917 0v-.459a.917.917 0 011.833 0v.459z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements5Icon;
/* prettier-ignore-end */
