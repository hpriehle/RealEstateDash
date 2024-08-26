// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements26Icon(props: Elements26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
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
          "M2.48 0c.321 0 .583.261.583.583V1.75a.583.583 0 11-1.167 0V.583c0-.322.261-.583.583-.583zm7 0c.321 0 .582.261.582.583V1.75a.583.583 0 11-1.166 0V.583c0-.322.261-.583.583-.583z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.569.73c1.145 0 2.053 0 2.764.102.734.107 1.32.332 1.779.827.453.49.655 1.11.752 1.887.094.762.094 1.737.094 2.982v.361c0 1.245 0 2.22-.094 2.981-.097.777-.299 1.397-.752 1.888-.459.495-1.045.72-1.78.826-.71.104-1.618.104-2.763.104h-1.18c-1.145 0-2.053 0-2.763-.104-.734-.107-1.321-.331-1.78-.826-.453-.491-.655-1.111-.751-1.888C0 9.11 0 8.134 0 6.89v-.362c0-1.245 0-2.22.095-2.982C.19 2.77.393 2.15.847 1.66c.458-.495 1.045-.72 1.779-.827C3.336.73 4.244.73 5.39.73h1.179zm-1.99 5.687c.451 0 .817.365.817.816v2.1a.583.583 0 11-1.167 0v-1.75a.583.583 0 010-1.166h.35zM5.98 7c0-.322.261-.583.583-.583h1.004c.465 0 .897.46.7.99l-.79 2.13a.583.583 0 01-1.093-.407l.574-1.547h-.394A.583.583 0 015.979 7zm-3.5-3.5a.583.583 0 100 1.167h7a.583.583 0 000-1.167h-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements26Icon;
/* prettier-ignore-end */
