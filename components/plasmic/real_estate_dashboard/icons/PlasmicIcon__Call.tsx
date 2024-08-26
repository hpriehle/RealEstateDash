// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CallIcon(props: CallIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.712 1.024c.377.078.678.332.865.668l.596 1.068c.219.393.403.725.524 1.012.128.306.204.607.17.94-.036.333-.172.612-.36.884-.177.257-.426.543-.722.882l-.876 1.006c-.156.18-.235.27-.242.383-.007.112.057.209.186.4a15.531 15.531 0 004.213 4.214c.192.129.288.193.401.186.113-.007.203-.086.383-.243l1.005-.875c.34-.296.626-.545.883-.722.272-.188.551-.325.884-.36.333-.034.634.042.94.17.287.12.618.305 1.012.524l1.068.596c.335.187.59.488.668.865.078.382-.038.766-.295 1.081-.933 1.144-2.427 1.873-3.994 1.557-.964-.195-1.914-.518-3.064-1.178-2.31-1.325-4.382-3.397-5.705-5.705-.66-1.15-.984-2.1-1.178-3.064-.316-1.567.412-3.062 1.557-3.994.315-.257.699-.374 1.08-.295z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CallIcon;
/* prettier-ignore-end */
