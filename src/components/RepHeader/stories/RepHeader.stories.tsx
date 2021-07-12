import React from "react";
import { Story } from "@storybook/react";

import RepHeader, { RepHeaderProps } from "../RepHeader";

export default {
	title: "RepHeader",
	component : RepHeader 
}

const Template: Story<RepHeaderProps>  = (args) => (<RepHeader {...args}/>);

export const ReportHeader = Template.bind({});

ReportHeader.args = {
	header: { title: "Carlyle Amphora Partners", numberOfAccounts: 5, date: new Date( ) }
}

