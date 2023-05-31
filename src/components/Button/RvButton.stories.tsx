/* eslint react/prop-types: off */

import type { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { ThemeProvider } from "styled-components";
import theme from "../config/theme";
import { RvButton } from "./index";
import type { RvButtonFCType } from "../../types/components/Button";
import { rvButtonProps } from "./RvButton";

export default {
	title: "Components/Button/RvButton",
	component: RvButton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} as Meta<RvButtonFCType>;

const Template: Story<RvButtonFCType> = ({ children, ...args }) => (
	<ThemeProvider theme={theme}>
		<RvButton {...args}>{children}</RvButton>
	</ThemeProvider>
);

/**
 * Base Button
 */
export const Default = Template.bind({});

const defaultProps: RvButtonFCType = {
	...rvButtonProps,
};
Default.args = {
	children: "Default",
	...defaultProps,
};
Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const button = canvas.getByRole("button");
	userEvent.click(button);
};

/**
 * OutLine Button
 */
export const OutLine = Template.bind({});
const outLineProps: RvButtonFCType = {
	...rvButtonProps,
	bgColor: "white500",
	borderWidth: "1px",
	borderColor: "black500",
	hover: {
		bgColor: "black50",
		textColor: "white50",
	},
};
OutLine.args = {
	children: "OutLine",
	...outLineProps,
};