// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements21Icon(props: Elements21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 13"}
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
          "M9.113.025a77.24 77.24 0 00-3.893 0h-.039c-1.016.026-1.834.047-2.49.16-.686.12-1.244.35-1.715.823-.47.47-.698 1.02-.815 1.696-.111.643-.128 1.44-.15 2.43v.038a46.545 46.545 0 000 1.99V7.2c.022.989.039 1.787.15 2.43.117.675.345 1.225.815 1.696.471.473 1.029.702 1.715.822.656.114 1.474.134 2.49.16h.039c1.302.034 2.591.034 3.893 0h.04c1.016-.026 1.834-.046 2.49-.16.685-.12 1.243-.35 1.715-.822.469-.471.697-1.021.814-1.696.112-.643.129-1.441.15-2.43v-.039a46.43 46.43 0 000-1.989v-.039c-.021-.988-.038-1.786-.15-2.43-.117-.675-.345-1.224-.814-1.695-.472-.473-1.03-.703-1.716-.822-.655-.114-1.473-.135-2.49-.16L9.113.025zM4.088 3.403a.5.5 0 00-.51.86l1.962 1.16C6.12 5.767 6.622 6 7.167 6c.545 0 1.046-.233 1.626-.577l1.962-1.16a.5.5 0 10-.51-.86l-1.96 1.16C7.72 4.895 7.421 5 7.166 5c-.256 0-.555-.105-1.118-.437l-1.961-1.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements21Icon;
/* prettier-ignore-end */
