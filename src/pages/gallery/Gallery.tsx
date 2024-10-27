import styles from "./gallery.module.css";
import { products } from "../../utils/mock.ts";
import { Product } from "../../types/product.ts";
import { useOutletContext } from "react-router-dom";
import { GalleryList } from "./components/GalleryList.tsx";

interface LayoutContext {
  search: string;
  setSearch: (value: string) => void;
}

export function Gallery() {
  const { search } = useOutletContext<LayoutContext>();

  const filteredProducts = products.filter((produto: Product) =>
    produto.productName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h2 className={styles.heading}>Galeria</h2>
      <GalleryList filteredProducts={filteredProducts} />
    </>
  );
}
