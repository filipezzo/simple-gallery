import styles from "./main.module.css";
import { products } from "../../utils/mock.ts";
import { Product } from "../../types/product.ts";

export function Main() {
  return (
    <main className={`${styles.main} container`}>
      <h2 className={styles.heading}>Galeria</h2>
      <ul className={styles.list}>
        {products.map((product: Product) => (
          <li className={styles.item} key={product.id}>
            <figure>
              <img
                className={styles.itemImg}
                src={product.photoLink}
                alt={`foto sobre ${product.productName}`}
              />
              <figcaption className={styles.imgContent}>
                <h3>{product.productName}</h3>
                <span className={styles.tag}>TAG</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
}
