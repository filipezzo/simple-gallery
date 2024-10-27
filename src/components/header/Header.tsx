import {Camera} from "lucide-react";
import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="/public">
                <Camera size={40} />
            </a>
            <nav className={styles.headerNav}>
                <ul className={styles.listNav}>
                    <li>
                        <a>
                            Home
                        </a>

                    </li>
                    <li>
                        <a>Galeria</a>
                    </li>
                </ul>
                <input placeholder="Pesquise por imagens e coleções" className={styles.input} />
                <div className={styles.avatar}>
                    <img src="https://avatars.githubusercontent.com/u/109683955?v=4" alt="imagem do usuario" />
                </div>
            </nav>

        </header>
    );
}