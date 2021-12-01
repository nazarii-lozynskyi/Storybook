import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Logo from "./../Logo/Logo";
import Navigation from "./../Navigation/Navigation";
import Toggle from "./../Toggle/Toggle";

import styles from "./AppBar.module.css";

export default function AppBar({ navItems, logoImg, minimized = false }) {
  const [isMinimized, setIsMinimized] = useState(minimized);
  const toggle = () => setIsMinimized((state) => !state);

  return (
    <Routes>
      <div
        className={`${styles.appbar} ${isMinimized ? styles.minimized : ""}`}
      >
        <div className={styles.logoThumb}>
          <Logo imageUrl={logoImg} />
        </div>
        <div className={styles.content}>
          <Toggle reversed={isMinimized} onClick={toggle} />

          <Route path="/navigation" element={<Navigation items={navItems} />} />
        </div>
      </div>
    </Routes>
  );
}
