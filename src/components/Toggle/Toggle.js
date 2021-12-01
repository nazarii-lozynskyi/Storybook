import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import styles from "./Toggle.module.css";

export default function Toggle({ reversed = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${reversed ? styles.reversed : ""}`}
    >
      <MdOutlineKeyboardArrowLeft size={24} />
    </button>
  );
}
