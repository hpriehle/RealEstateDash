// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements43Icon(props: Elements43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.061 0c.787 0 1.407.594 1.803 1.396l1.321 2.665c.04.083.135.199.278.305a.952.952 0 00.374.18l2.393.401c.864.145 1.588.569 1.823 1.306.235.737-.11 1.503-.73 2.126h-.001l-1.859 1.874a.953.953 0 00-.208.397.989.989 0 00-.032.452v.002l.532 2.318c.22.964.147 1.921-.533 2.421-.683.502-1.616.28-2.464-.225l-2.242-1.339a.92.92 0 00-.451-.102.954.954 0 00-.46.104l-2.239 1.336c-.846.507-1.778.726-2.461.223-.68-.5-.757-1.455-.536-2.419l.532-2.317v-.002a.988.988 0 00-.032-.452.954.954 0 00-.208-.397L.8 8.378C.183 7.755-.16 6.99.073 6.254c.234-.738.957-1.162 1.822-1.307l2.39-.4a.948.948 0 00.368-.18.942.942 0 00.278-.306l.002-.004 1.32-2.661v-.001C6.654.593 7.276 0 8.062 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements43Icon;
/* prettier-ignore-end */
