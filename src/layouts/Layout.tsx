import { Header } from "../components/header/Header.tsx";
import { Footer } from "../components/footer/Footer.tsx";
import styles from "../pages/gallery/gallery.module.css";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="homepage">
      <Header />
      <main className={`${styles.main} container`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
