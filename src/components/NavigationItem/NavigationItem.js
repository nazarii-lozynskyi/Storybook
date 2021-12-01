import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

export default function NavigationItem({ to, text, icon }) {
  return (
    <li className={styles.item}>
      <NavLink to={to}>
        {icon} {text}
      </NavLink>
    </li>
  );
}
