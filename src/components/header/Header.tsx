import { Camera } from "lucide-react";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onSearch: (text: string) => void;
  search: string;
}

export function Header({ onSearch, search }: HeaderProps) {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isGallery = pathname === "/gallery";

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={"/"}>
        <Camera size={40} />
      </Link>
      <nav className={styles.headerNav}>
        <ul className={styles.listNav}>
          <li>
            <Link className={`${isHome ? "active" : ""}`} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={`${isGallery ? "active" : ""}`} to={"/gallery"}>
              Galeria
            </Link>
          </li>
        </ul>
        <input
          value={search}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
          placeholder="Pesquise por imagens e coleções"
          className={styles.input}
        />
        <div className={styles.avatar}>
          <img
            src="https://avatars.githubusercontent.com/u/109683955?v=4"
            alt="imagem do usuario"
          />
        </div>
      </nav>
    </header>
  );
}
