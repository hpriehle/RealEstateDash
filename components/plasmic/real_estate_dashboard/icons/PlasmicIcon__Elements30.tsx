// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Elements30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Elements30Icon(props: Elements30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 13"}
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
          "M2.48 0c.321 0 .583.261.583.583V1.75a.583.583 0 11-1.167 0V.583c0-.322.261-.583.583-.583zm2.916 0c.322 0 .583.261.583.583V1.75a.583.583 0 01-1.167 0V.583c0-.322.262-.583.584-.583zm2.917 0c.322 0 .583.261.583.583V1.75a.583.583 0 11-1.167 0V.583A.584.584 0 018.312 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.886.73c.798 0 1.441 0 1.947.067.525.07.967.222 1.318.573.351.351.502.793.573 1.318.068.506.068 1.149.068 1.947v4.147c0 .798 0 1.44-.068 1.947-.07.525-.222.967-.573 1.318-.351.35-.793.502-1.318.572-.506.069-1.149.069-1.947.069H5.407l-1.078-2.03-.026-.04c-.286-.456-.524-.836-.753-1.109-.242-.288-.52-.514-.9-.583-.539-.097-1.143.126-1.62.37-.354.18-.691.4-.964.603a2.188 2.188 0 01-.042-.263A8.844 8.844 0 010 8.788V4.635c0-.798 0-1.441.068-1.947.07-.525.222-.967.573-1.318.35-.351.793-.502 1.318-.573C2.465.73 3.108.73 3.905.73h2.981zM3.571 11.096l.817 1.538a2.919 2.919 0 01-.523-.224l-.032-.016-2.32-1.16a8.823 8.823 0 01-.748-.4 2.1 2.1 0 01-.246-.181c.249-.19.573-.408.91-.58.451-.23.83-.33 1.066-.287.095.017.207.073.384.285.184.219.39.543.692 1.025zm-.509-6.868a.437.437 0 100 .875h2.334a.437.437 0 100-.875H3.063zm0 2.917a.438.438 0 000 .875H7.73a.437.437 0 100-.875H3.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Elements30Icon;
/* prettier-ignore-end */
