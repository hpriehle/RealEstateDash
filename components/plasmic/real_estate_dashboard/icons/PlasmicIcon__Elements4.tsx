// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements4Icon(props: Elements4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.76 13.788l.09-.024c.224-.058.453-.123.656-.194.188-.066.41-.155.583-.274a2.576 2.576 0 001.093-1.979c.023-.414-.071-.855-.138-1.167a8.81 8.81 0 01-.05-.239l-.088-.338a.687.687 0 00-.974-.441l-3.93 1.973a1.179 1.179 0 00-.21 1.973l.028.023c.478.384.884.71 1.401.828.533.122 1 0 1.54-.14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M3.896 10.083c0 .38.308.688.687.688H16.5c.38 0 .688-.308.688-.688v-5.5c0-.394-.02-.757-.09-1.074-.07-.324-.203-.641-.46-.897-.256-.256-.573-.39-.898-.46-.316-.07-.68-.09-1.073-.09h-8.25c-.394 0-.758.02-1.074.09-.324.07-.642.204-.898.46s-.389.573-.46.897c-.07.317-.09.68-.09 1.074v5.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.917 17.417c.506 0 .916-.41.916-.917V.917A.917.917 0 100 .917V16.5c0 .506.41.917.917.917zm18.333-4.584c.506 0 .917-.41.917-.916v-11a.917.917 0 00-1.834 0v11c0 .506.41.916.917.916z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.435 12.696c.27.168.607.183.892.04L4.8 11h14.45c.506 0 .917-.41.917-.917V5.5a.917.917 0 00-.917-.917H16.5a.917.917 0 00-.917.917v3.667H5.5V5.5a.917.917 0 00-.917-.917H.917A.917.917 0 000 5.5v6.417c0 .317.164.612.435.78zm3.232-3.18l-1.834.918V6.417h1.834v3.1zm13.75-.35v-2.75h.916v2.75h-.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements4Icon;
/* prettier-ignore-end */
