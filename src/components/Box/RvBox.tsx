/* eslint react/jsx-props-no-spreading: off */

import type { FC } from "react";
import type { RvBoxFCType, StyledDivType } from "../../types/components/Div";
import { StyledDiv } from "./style";

export const rvDefaultProps: StyledDivType = {
	width: 30,
	height: 10,
	borderRadius: 0.5,
	boxShadow: "md",
};

const RvBox: FC<RvBoxFCType> = ({ children, ...props }) => {
	const newProps = { ...props };
	return <StyledDiv {...newProps}>{children}</StyledDiv>;
};

export default RvBox;
