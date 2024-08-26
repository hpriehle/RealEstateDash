// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements35Icon(props: Elements35IconProps) {
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
          "M9.69 6.502l-1.253.376.335 1.118 1.254-.376.03-.01a9.42 9.42 0 00.963-.323c.282-.121.54-.281.74-.548.198-.268.277-.562.313-.866.032-.282.032-.624.032-1.016V.437h-1.166v4.389c0 .432-.001.706-.025.912-.023.191-.059.261-.09.304-.033.043-.09.098-.266.174-.19.083-.453.162-.867.286z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.192 11.25c.389-.112.718-.208.977-.318.277-.118.516-.27.697-.518.18-.246.255-.522.29-.824.032-.286.032-.639.031-1.06V.438A.437.437 0 008.75 0H1.167a.438.438 0 00-.438.438v8.948c0 .704 0 1.278.062 1.72.064.458.206.867.567 1.15.364.287.791.32 1.242.26.43-.057.966-.213 1.616-.402l2.976-.863zM3.646 8.605c0 .242.196.438.437.438h1.75a.437.437 0 100-.875h-1.75a.437.437 0 00-.437.437zm0-2.333c0 .242.196.437.437.437h1.75a.437.437 0 100-.875h-1.75a.438.438 0 00-.437.438zm1.02-1.896h-.025c-.253 0-.484 0-.673-.025-.207-.028-.426-.094-.607-.274-.18-.18-.245-.4-.273-.607a5.418 5.418 0 01-.026-.672V.437h.876v2.334c0 .287 0 .459.017.582a.362.362 0 00.03.102.268.268 0 01.003.006c.012.005.04.014.097.022.123.016.294.017.582.017h.583c.287 0 .459 0 .582-.017a.365.365 0 00.108-.033.413.413 0 00.022-.097 5.2 5.2 0 00.017-.582V.438h.875v2.359c0 .252 0 .484-.025.672-.028.208-.094.427-.274.607-.18.18-.4.246-.607.274-.188.025-.42.025-.672.025h-.609z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 .583c0 .323.261.584.583.584H12.25a.583.583 0 100-1.167H.583A.583.583 0 000 .583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements35Icon;
/* prettier-ignore-end */
