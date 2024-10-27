import styles from "../gallery.module.css";
import { Product } from "../../../types/product.ts";
import { GalleryItem } from "./GalleryItem.tsx";

interface GalleryListProps {
  filteredProducts: Product[];
}

export function GalleryList({ filteredProducts }: GalleryListProps) {
  const hasNoResults = filteredProducts.length === 0;
  return (
    <ul className={styles.list}>
      {hasNoResults ? (
        <p>Não tem nada cara</p>
      ) : (
        filteredProducts.map((product: Product) => (
          <GalleryItem key={product.id} product={product} />
        ))
      )}
    </ul>
  );
}
