import Logo from "./Logo";

const Stories = {
  title: "Logo",
  component: Logo,
};

export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
};
