/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../config";
import { RvBox } from ".";
import { RvBoxFCType } from "../../types/components/Div";
import { rvDefaultProps } from "./RvBox";

export default {
	title: "Components/Box/RvBox",
	component: RvBox,
	tags: ["autodocs"],
} as Meta<RvBoxFCType>;

const Template: Story<RvBoxFCType> = ({ children, ...props }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RvBox {...props}>{children}</RvBox>
		</ThemeProvider>
	);
};

export const Default = Template.bind({});
const DefaultProps: RvBoxFCType = {
	...rvDefaultProps,
};

Default.args = { children: "Default", ...DefaultProps };
