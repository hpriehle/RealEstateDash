// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements6Icon(props: Elements6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
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
          "M15.228 10.218l-1.97.59.527 1.757 1.97-.591.047-.014c.589-.177 1.105-.332 1.514-.508.442-.191.849-.443 1.161-.863.313-.42.437-.882.493-1.36.051-.443.051-.981.051-1.596V.687h-1.833v6.897c0 .678-.002 1.109-.04 1.433-.034.3-.091.41-.142.478-.05.067-.139.154-.416.273-.3.13-.712.255-1.362.45z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.302 17.68c.61-.178 1.128-.328 1.535-.502.435-.185.81-.423 1.095-.813.284-.387.4-.82.454-1.295.052-.45.052-1.004.052-1.665V.688A.687.687 0 0013.75 0H1.833a.688.688 0 00-.687.688V14.75c0 1.105 0 2.008.097 2.703.101.719.324 1.361.89 1.807.573.451 1.244.503 1.952.409.676-.091 1.518-.335 2.54-.632l4.677-1.357zm-5.573-4.16c0 .38.308.688.688.688h2.75a.688.688 0 000-1.375h-2.75a.687.687 0 00-.688.688zm0-3.666c0 .38.308.688.688.688h2.75a.687.687 0 100-1.375h-2.75a.688.688 0 00-.688.687zm1.604-2.979h-.04c-.397 0-.761 0-1.057-.04-.326-.043-.67-.147-.954-.43-.283-.283-.386-.627-.43-.953-.04-.296-.04-.66-.04-1.057V.688h1.376v3.666c0 .452.001.721.027.914a.572.572 0 00.051.17c.02.009.065.023.153.035.193.026.463.027.914.027h.917c.452 0 .721-.001.914-.027.077-.01.134-.036.16-.047a.48.48 0 01.01-.005.648.648 0 00.034-.153c.026-.193.028-.462.028-.914V.688h1.375v3.707c0 .397 0 .76-.04 1.057-.044.326-.147.67-.43.953-.283.283-.628.387-.954.43-.295.04-.66.04-1.056.04h-.958z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 .917c0 .506.41.916.917.916H19.25a.917.917 0 100-1.833H.917A.917.917 0 000 .917z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements6Icon;
/* prettier-ignore-end */
