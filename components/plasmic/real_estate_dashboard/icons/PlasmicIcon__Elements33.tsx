// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements33Icon(props: Elements33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.393 8.774l.057-.015a5.46 5.46 0 00.418-.124c.12-.042.26-.098.37-.174a1.64 1.64 0 00.696-1.26c.015-.263-.045-.543-.088-.742l-.025-.123a.438.438 0 00-.007-.029l-.055-.215a.438.438 0 00-.62-.28L.637 7.066a.75.75 0 00-.133 1.256l.018.014c.304.244.562.452.891.527.34.078.637 0 .98-.09z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2.48 6.417c0 .241.195.437.437.437H10.5a.438.438 0 00.438-.437v-3.5c0-.251-.013-.482-.057-.684a1.127 1.127 0 00-.293-.571 1.127 1.127 0 00-.571-.293 3.254 3.254 0 00-.684-.056h-5.25c-.25 0-.482.012-.683.056-.206.046-.408.13-.571.293a1.126 1.126 0 00-.293.571 3.254 3.254 0 00-.057.684v3.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.583 11.083a.583.583 0 00.584-.583V.583A.583.583 0 000 .583V10.5c0 .322.261.583.583.583zM12.25 8.167a.583.583 0 00.583-.584v-7a.583.583 0 10-1.166 0v7c0 .322.26.584.583.584z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.277 8.08a.583.583 0 00.567.025L3.054 7h9.196a.583.583 0 00.583-.583V3.5a.583.583 0 00-.583-.583H10.5a.583.583 0 00-.583.583v2.333H3.5V3.5a.583.583 0 00-.583-.583H.583A.583.583 0 000 3.5v4.083c0 .202.105.39.277.497zm2.056-2.024l-1.166.583V4.083h1.166v1.973zm8.75-.223v-1.75h.584v1.75h-.584z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements33Icon;
/* prettier-ignore-end */
