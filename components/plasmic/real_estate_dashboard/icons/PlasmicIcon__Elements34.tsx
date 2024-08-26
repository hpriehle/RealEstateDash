// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements34Icon(props: Elements34IconProps) {
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
          "M.73 6.384V7H.582a.583.583 0 000 1.167h4.084c.505 0 .996-.164 1.4-.467l1.4-1.05c.202-.151.447-.233.7-.233h4.083a.583.583 0 100-1.167h-.147a14.874 14.874 0 00-.05-1.378c-.053-.518-.163-.95-.416-1.328a2.77 2.77 0 00-.764-.765c-.378-.252-.81-.362-1.328-.415-.506-.052-1.139-.052-1.937-.052H5.8c-1.072 0-1.92 0-2.585.09-.684.092-1.238.286-1.674.722-.437.437-.63.99-.723 1.674C.73 4.463.73 5.312.73 6.384z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.917 2.333a.583.583 0 01-.584-.583V.583a.583.583 0 011.167 0V1.75a.583.583 0 01-.583.583zm-7 0a.583.583 0 01-.584-.583V.583a.583.583 0 011.167 0V1.75a.583.583 0 01-.583.583zm1.75 7.875a1.458 1.458 0 01-2.917 0V7.583a.583.583 0 011.167 0v2.625a.292.292 0 10.583 0v-.291a.583.583 0 111.167 0v.291z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements34Icon;
/* prettier-ignore-end */
