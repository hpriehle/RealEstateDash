// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements2Icon(props: Elements2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M4.054.677C4.524.332 4.976.125 5.5.125c.524 0 .975.207 1.446.552.457.334.972.828 1.622 1.45l.017.018 1.29 1.19v2.693c0 .92 0 1.647-.077 2.217-.078.586-.244 1.06-.619 1.434-.374.375-.848.54-1.434.62-.57.076-1.298.076-2.217.076h-.056c-.92 0-1.647 0-2.217-.077-.586-.078-1.06-.244-1.434-.619-.375-.374-.54-.848-.62-1.434-.076-.57-.076-1.298-.076-2.217V3.336l1.29-1.191.017-.017c.65-.623 1.165-1.117 1.622-1.451zm1.444 6.448A.624.624 0 105.5 8.373a.624.624 0 00-.002-1.248z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.57 1.383c-.403.295-.876.747-1.552 1.396L.846 4.86a.5.5 0 01-.692-.722l2.198-2.107C2.996 1.414 3.516.915 3.98.576 4.462.223 4.939 0 5.5 0s1.038.223 1.52.576c.464.34.984.838 1.629 1.456l2.197 2.107a.5.5 0 01-.692.722L7.982 2.779c-.676-.65-1.149-1.1-1.552-1.396C6.038 1.097 5.767 1 5.5 1s-.538.097-.93.383z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements2Icon;
/* prettier-ignore-end */
