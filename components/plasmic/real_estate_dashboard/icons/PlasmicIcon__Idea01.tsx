// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Idea01IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Idea01Icon(props: Idea01IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.552 8.75a4.001 4.001 0 01-.344-1.63c0-2.16 1.698-3.912 3.792-3.912s3.792 1.751 3.792 3.912a4 4 0 01-.344 1.63"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M7 1.166v.583M12.833 7h-.583M1.75 7h-.583m9.957-4.125l-.412.412m-7.424.001l-.412-.413m5.592 8.387c.59-.191.826-.73.893-1.273.02-.162-.114-.297-.277-.297h-4.14a.282.282 0 00-.284.312c.066.541.23.937.855 1.258m2.953 0H5.515m2.953 0c-.07 1.134-.398 1.583-1.464 1.57-1.14.022-1.402-.534-1.49-1.57"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Idea01Icon;
/* prettier-ignore-end */
