import AppBar from "./AppBar";

import { navItems } from "./../Navigation/Navigation.stories";

const Stories = {
  title: "AppBar",
  component: AppBar,
};

export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImg:
    "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
  navItems,
  minimized: false,
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
