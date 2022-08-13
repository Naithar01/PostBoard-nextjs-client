import Link from "next/link";
import { Category } from "../../pages/category";

import styles from "../../styles/category/categorylist.module.css";

interface IProps {
  category: Category;
}

const CategoryList = ({ category }: IProps) => {
  return (
    <div className={styles.categoty_list}>
      <p className={styles.category_link}>
        <Link href={`/post?query_category=${category.name}`}>
          {category.name}
        </Link>
      </p>
    </div>
  );
};

export default CategoryList;
