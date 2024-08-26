// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements11Icon(props: Elements11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 17.5H7.417c-3.025 0-4.538 0-5.477-.94C1 15.62 1 14.108 1 11.083V1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M13.779 4.667a.75.75 0 011.5 0h-1.5zm-9.112 9.916a.75.75 0 010-1.5v1.5zm8.355-8.487a.75.75 0 01-1.096-1.025l1.096 1.025zm.345-1.467l-.548-.512.547.512zm2.324 0l.548-.512-.548.512zm1.44.442a.75.75 0 01-1.096 1.025l1.096-1.025zM14.53 3.75V3v.75zm.75.917c0 3.234-1.184 5.742-3.15 7.43-1.951 1.675-4.604 2.486-7.462 2.486v-1.5c2.588 0 4.866-.734 6.485-2.124 1.603-1.376 2.627-3.452 2.627-6.292h1.5zm-3.353.404l.893-.954 1.095 1.024-.892.955-1.096-1.025zm4.313-.954l.892.954-1.096 1.025-.892-.955 1.096-1.024zm-3.42 0c.259-.277.504-.542.732-.728.243-.199.562-.389.978-.389v1.5c.075 0 .087-.044-.03.05-.13.108-.296.282-.585.591L12.82 4.117zm2.324 1.024c-.289-.309-.454-.483-.585-.59-.116-.095-.105-.051-.03-.051V3c.417 0 .735.19.978.389.228.186.474.45.733.728L15.143 5.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements11Icon;
/* prettier-ignore-end */
