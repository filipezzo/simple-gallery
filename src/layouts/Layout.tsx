import { Header } from "../components/header/Header.tsx";
import { Footer } from "../components/footer/Footer.tsx";
import styles from "../pages/gallery/gallery.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export function Layout() {
  const [search, setSearch] = useState("");
  console.log(search);
  console.log("re-render");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <div className="homepage">
      <Header onSearch={handleSearch} search={search} />
      <main className={`${styles.main} container`}>
        <Outlet context={{ search, setSearch }} />
      </main>
      <Footer />
    </div>
  );
}
