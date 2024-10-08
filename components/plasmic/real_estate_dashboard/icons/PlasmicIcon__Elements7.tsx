// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements7Icon(props: Elements7IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.448 0h-.105C7.335 0 5.758 0 4.527.166c-1.262.17-2.264.524-3.05 1.31C.69 2.264.335 3.266.166 4.527 0 5.759 0 7.337 0 9.344v.105c0 2.008 0 3.586.166 4.817.17 1.262.524 2.263 1.31 3.05.787.787 1.789 1.141 3.05 1.311 1.232.166 2.81.166 4.817.166h.105c2.008 0 3.586 0 4.817-.166 1.262-.17 2.263-.524 3.05-1.311.787-.787 1.141-1.788 1.311-3.05.166-1.231.166-2.809.166-4.817v-.105c0-2.008 0-3.585-.166-4.816-.17-1.262-.524-2.264-1.311-3.05C16.528.69 15.527.335 14.265.166 13.034 0 11.456 0 9.448 0zm4.073 4.125c-1.06 0-2.063.781-2.063 1.91a.687.687 0 101.375 0c0-.222.23-.535.688-.535.458 0 .687.313.687.535 0 .133-.07.29-.244.405l-2.2 1.467a.688.688 0 00.382 1.26h2.75a.688.688 0 000-1.375h-.48l.311-.208c.52-.346.856-.913.856-1.55 0-1.128-1.002-1.909-2.062-1.909zM4.219 9.167c.292 0 .47 0 .605.011a.494.494 0 01.444.328c.06.132.125.31.23.592l.389 1.058c-.357.59-.69 1.114-1.036 1.513-.408.472-.715.623-.955.623a.688.688 0 000 1.375c.854 0 1.509-.537 1.994-1.097a8.34 8.34 0 00.595-.787c.093.255.203.554.288.739.09.198.2.39.365.564a1.9 1.9 0 00.566.405c.219.103.437.142.652.16.198.016.456.016.716.016a.687.687 0 100-1.375c-.291 0-.469 0-.604-.012-.205-.008-.382-.222-.444-.328a9.478 9.478 0 01-.23-.592l-.389-1.058c.357-.589.69-1.114 1.035-1.513.41-.471.715-.622.956-.622a.687.687 0 000-1.375c-.854 0-1.509.536-1.995 1.096a8.334 8.334 0 00-.594.787c-.094-.255-.204-.554-.288-.739-.09-.198-.2-.39-.366-.563a1.9 1.9 0 00-.565-.406 1.856 1.856 0 00-.652-.16 9.723 9.723 0 00-.717-.015.688.688 0 000 1.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements7Icon;
/* prettier-ignore-end */
