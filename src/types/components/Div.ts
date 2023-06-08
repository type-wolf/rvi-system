import type { ReactNode, HTMLAttributes } from "react";
import type * as CSSCustomProperties from "../CSSProperties";
import type { BaseCSSDivType } from "../CSSProperties";

export type StyledDivHoverType = {
	hover?: BaseCSSDivType & {};
};

export type StyledDivType = BaseCSSDivType & StyledDivHoverType;

export type StyledFlexType = StyledDivType & {
	flexDirection?: CSSCustomProperties.FlexDirectionType;
	flexWrap?: CSSCustomProperties.FlexWrapType;
	justifyContent?: CSSCustomProperties.JustifyContentType;
	alignItems?: CSSCustomProperties.AlignItemsType;
};

export type StyledVStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginBottomType;
};

export type StyledHStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginRightType;
};

export type StyledStackType = StyledFlexType & {
	space?: CSSCustomProperties.MarginRightType | CSSCustomProperties.MarginBottomType;
};

export type StyledCenterType = StyledDivType;

export type StyledShadowCenterType = StyledCenterType;

export type StyledSidebarContainerType = StyledDivType;

export type StyledSidebarHeaderType = StyledFlexType;

export type BasePropsType = {
	[props: string]: object | ReactNode | HTMLAttributes<HTMLDivElement>;
	children?: ReactNode;
};

export type RvBoxFCType = StyledDivType & BasePropsType;

export type RvFlexFCType = StyledFlexType & BasePropsType;

export type RvHStackFCType = StyledHStackType & BasePropsType;

export type RvVStackFCType = StyledVStackType & BasePropsType;
