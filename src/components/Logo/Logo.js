import styles from "./Logo.module.css";

export default function Logo({ imageUrl, alt = "" }) {
  return <img src={imageUrl} alt={alt} className={styles.logo} />;
}
