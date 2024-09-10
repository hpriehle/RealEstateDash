// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tkmnpDqLBPFkHbb2kiGN2p
// Component: UXSH7agX7pg7

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tkmnpDqLBPFkHbb2kiGN2p/projectcss
import sty from "./PlasmicDateTimeRangePicker.module.css"; // plasmic-import: UXSH7agX7pg7/css

createPlasmicElementProxy;

export type PlasmicDateTimeRangePicker__VariantMembers = {};
export type PlasmicDateTimeRangePicker__VariantsArgs = {};
type VariantPropType = keyof PlasmicDateTimeRangePicker__VariantsArgs;
export const PlasmicDateTimeRangePicker__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDateTimeRangePicker__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDateTimeRangePicker__ArgsType;
export const PlasmicDateTimeRangePicker__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicDateTimeRangePicker__OverridesType = {
  root?: Flex__<"div">;
  h2?: Flex__<"h2">;
  freeBox?: Flex__<"div">;
};

export interface DefaultDateTimeRangePickerProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDateTimeRangePicker__RenderFunc(props: {
  variants: PlasmicDateTimeRangePicker__VariantsArgs;
  args: PlasmicDateTimeRangePicker__ArgsType;
  overrides: PlasmicDateTimeRangePicker__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <h2
        data-plasmic-name={"h2"}
        data-plasmic-override={overrides.h2}
        className={classNames(
          projectcss.all,
          projectcss.h2,
          projectcss.__wab_text,
          sty.h2
        )}
      >
        <React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 500 }}
          >
            {"Custom date range analysis"}
          </span>
        </React.Fragment>
      </h2>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              {(() => {
                const child$Props = {
                  allowClear: true,
                  bordered: true,
                  className: classNames(
                    "__wab_instance",
                    sty.dateTimePicker__evN2O
                  ),
                  picker: "date",
                  popupScopeClassName:
                    sty["dateTimePicker__evN2O__datePickerPopup"],
                  showTime: false
                };

                return <AntdDatePicker {...child$Props} />;
              })()}
              {(() => {
                const child$Props = {
                  allowClear: true,
                  bordered: true,
                  className: classNames(
                    "__wab_instance",
                    sty.dateTimePicker__onWrx
                  ),
                  popupScopeClassName:
                    sty["dateTimePicker__onWrx__datePickerPopup"],
                  showTime: false
                };

                return <AntdDatePicker {...child$Props} />;
              })()}
            </React.Fragment>
          ),
          value: args.children
        })}
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "freeBox"],
  h2: ["h2"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDateTimeRangePicker__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDateTimeRangePicker__VariantsArgs;
    args?: PlasmicDateTimeRangePicker__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDateTimeRangePicker__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDateTimeRangePicker__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDateTimeRangePicker__ArgProps,
          internalVariantPropNames: PlasmicDateTimeRangePicker__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDateTimeRangePicker__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDateTimeRangePicker";
  } else {
    func.displayName = `PlasmicDateTimeRangePicker.${nodeName}`;
  }
  return func;
}

export const PlasmicDateTimeRangePicker = Object.assign(
  // Top-level PlasmicDateTimeRangePicker renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicDateTimeRangePicker
    internalVariantProps: PlasmicDateTimeRangePicker__VariantProps,
    internalArgProps: PlasmicDateTimeRangePicker__ArgProps
  }
);

export default PlasmicDateTimeRangePicker;
/* prettier-ignore-end */
