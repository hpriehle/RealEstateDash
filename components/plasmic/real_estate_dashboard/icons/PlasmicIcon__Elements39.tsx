// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements39Icon(props: Elements39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 10"}
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
          "M3.333 0c.23 0 .417.187.417.417v.435c.646.06 1.237.255 1.7.554.557.36.974.906.974 1.572a.417.417 0 01-.834 0c0-.288-.181-.606-.592-.872-.32-.207-.752-.36-1.248-.416v2.36c.805.032 1.478.163 1.978.448.3.172.541.401.704.697.163.294.235.629.235.992 0 .802-.441 1.361-1.077 1.696-.51.269-1.155.402-1.84.438v.428a.417.417 0 01-.833 0v-.433c-.707-.055-1.354-.249-1.858-.548C.465 7.417 0 6.872 0 6.189a.417.417 0 11.833 0c0 .27.188.59.65.863.367.217.864.376 1.434.429V4.868c-.792-.033-1.414-.168-1.861-.432-.27-.16-.48-.367-.619-.626a1.733 1.733 0 01-.194-.832c0-.666.417-1.212.974-1.572.462-.299 1.054-.494 1.7-.554V.417c0-.23.186-.417.416-.417zm-.416 1.69c-.496.056-.928.21-1.248.416-.411.266-.593.584-.593.872 0 .186.036.327.095.437a.785.785 0 00.308.303c.276.163.73.283 1.438.316V1.69zm.833 3.195v2.603c.591-.036 1.091-.151 1.452-.341.42-.221.631-.526.631-.959 0-.253-.05-.443-.13-.59a.979.979 0 00-.389-.375c-.329-.188-.837-.306-1.564-.338z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements39Icon;
/* prettier-ignore-end */
