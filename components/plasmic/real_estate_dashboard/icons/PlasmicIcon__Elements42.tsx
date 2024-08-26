// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements42Icon(props: Elements42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
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
          "M6.397.055a25.448 25.448 0 013.33 0c3.426.227 6.143 2.992 6.367 6.45.041.646.041 1.315 0 1.962-.224 3.457-2.941 6.222-6.366 6.45a25.457 25.457 0 01-3.33 0 4.219 4.219 0 01-1.292-.296c-.178-.074-.3-.123-.388-.156a10.81 10.81 0 00-.26.189c-.594.438-1.345.745-2.41.72l-.034-.001c-.205-.005-.424-.01-.603-.045-.215-.042-.481-.146-.648-.43-.18-.309-.108-.621-.038-.818a5.28 5.28 0 01.3-.626l.015-.03c.35-.663.447-1.205.26-1.566C.676 10.915.115 9.754.031 8.467a15.374 15.374 0 010-1.963C.255 3.047 2.972.282 6.397.054zM5.062 6.938a.75.75 0 000 1.5h.007a.75.75 0 000-1.5h-.006zm2.997 0a.75.75 0 100 1.5h.007a.75.75 0 100-1.5h-.007zm2.997 0a.75.75 0 000 1.5h.007a.75.75 0 000-1.5h-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements42Icon;
/* prettier-ignore-end */
