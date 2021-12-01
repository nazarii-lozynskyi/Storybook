import NavigationItem from "./../NavigationItem/NavigationItem";

import styles from "./Navigation.module.css";

export default function Navigation({ items }) {
  return items
    ? items.map((item) => <NavigationItem key={item.text} {...item} />)
    : null;
}
