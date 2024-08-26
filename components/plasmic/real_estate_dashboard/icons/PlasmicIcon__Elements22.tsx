// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements22Icon(props: Elements22IconProps) {
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
          "M4.73.79C5.278.388 5.804.146 6.416.146c.611 0 1.137.242 1.687.644.533.39 1.134.966 1.892 1.692l.02.02 1.505 1.39v3.14c0 1.073 0 1.922-.09 2.587-.091.684-.285 1.237-.722 1.674-.436.436-.99.63-1.674.722-.664.09-1.513.09-2.586.09h-.065c-1.072 0-1.921 0-2.586-.09-.684-.092-1.237-.286-1.674-.722-.437-.437-.63-.99-.722-1.674-.09-.665-.09-1.514-.09-2.586V3.892l1.505-1.39.02-.02C3.595 1.756 4.196 1.18 4.73.79zm1.684 7.522a.728.728 0 00-.727.73c0 .402.326.729.727.729a.735.735 0 00.732-.73.735.735 0 00-.732-.729z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.332 1.613c-.47.345-1.022.872-1.811 1.629L.987 5.67a.583.583 0 01-.807-.84l2.563-2.46c.752-.722 1.359-1.303 1.9-1.7C5.206.262 5.762 0 6.417 0c.654 0 1.21.26 1.773.672.541.396 1.148.977 1.9 1.699l2.564 2.458a.583.583 0 11-.808.842l-2.533-2.43c-.79-.756-1.34-1.283-1.812-1.628-.456-.334-.773-.446-1.084-.446-.312 0-.628.112-1.085.446z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements22Icon;
/* prettier-ignore-end */
