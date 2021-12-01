import { HiHome } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

import Navigation from "./Navigation";

export const navItems = [
  { to: "/home", text: "Home", icon: <HiHome size={32} /> },
  {
    to: "/account",
    text: "My room",
    icon: <RiAccountPinCircleLine size={32} />,
  },
  { to: "/contacts", text: "Contacts", icon: <MdContactPhone size={32} /> },
];

const Stories = { title: "Navigation", component: Navigation };
export default Stories;

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = { items: navItems };
