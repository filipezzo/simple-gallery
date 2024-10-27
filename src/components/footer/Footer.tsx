import { year } from "../../utils/get-year.ts";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        {"\u00A9"} {year} - Filipe Avanzzo
      </span>
    </footer>
  );
}
