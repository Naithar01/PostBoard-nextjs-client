import { GetServerSideProps } from "next";
import Link from "next/link";
import CategoryList from "../../components/Category/CategoryList";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import { GetCategory } from "../../Lib/Category";

import styles from "../../styles/post/createpost.module.css";

export type Category = {
  id: string;
  name: string;
  create_at: string;
};

interface IProps {
  categorys: Category[];
}

const CategoryMainPage = ({ categorys }: IProps) => {
  return (
    <div className="category_page">
      <PageHeader header_text="Category Page" />
      <p className={styles.create_category_page}>
        <Link href="/category/create">Create Category</Link>
      </p>
      {categorys && categorys.length ? (
        categorys.map((category) => (
          <CategoryList key={category.id} category={category} />
        ))
      ) : (
        <p>No Category</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await GetCategory();
  const categorys: Category[] = await res.json();

  return {
    props: {
      categorys: categorys,
    },
  };
};

export default CategoryMainPage;
