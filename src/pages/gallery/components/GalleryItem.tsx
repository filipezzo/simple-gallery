import styles from "../gallery.module.css";
import { Product } from "../../../types/product.ts";

export function GalleryItem({ product }: { product: Product }) {
  return (
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
  );
}
