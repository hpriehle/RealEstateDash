// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements38Icon(props: Elements38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.344 6.192c.22.294.558.516.968.516.41 0 .749-.222.97-.516.22-.294.343-.68.343-1.088 0-.408-.123-.793-.344-1.087a1.321 1.321 0 00-.531-.427V.438a.438.438 0 00-.875 0V3.59a1.321 1.321 0 00-.531.427A1.82 1.82 0 000 5.104c0 .408.123.794.344 1.088z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 .438c0 .241.196.437.438.437h11.666a.438.438 0 000-.875H.438A.437.437 0 000 .438z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.438 4.375h.609c.252 0 .484 0 .672-.025.208-.028.427-.094.607-.274.18-.18.246-.4.274-.607.025-.188.025-.42.025-.672V.437A.437.437 0 009.19 0h2.04c.24 0 .437.196.437.438v6.22l.146-.13a.437.437 0 11.583.652L9.592 9.687c-.36.321-.66.59-.93.775-.286.196-.581.33-.933.33-.351 0-.647-.134-.933-.33-.27-.185-.57-.454-.93-.775L3.064 7.18a.438.438 0 01.583-.652l.146.13V.438c0-.242.196-.438.437-.438h2.04a.437.437 0 00-.436.437v2.36c0 .253 0 .484.026.672.027.208.093.427.273.607.18.18.4.246.607.274.188.025.42.025.672.025h.027zM8.75.437c0-.24.195-.436.435-.437H6.273c.24.001.435.197.435.437v2.334c0 .287.001.459.018.582.012.093.032.116.13.13.123.016.294.017.582.017h.583c.287 0 .459 0 .582-.017.098-.014.117-.037.13-.13a5.2 5.2 0 00.017-.582V.437zM7.146 8.458a.437.437 0 110-.875h1.167a.437.437 0 110 .875H7.146zm0-1.75a.437.437 0 110-.875h1.167a.437.437 0 110 .875H7.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements38Icon;
/* prettier-ignore-end */
