import { GetServerSideProps } from "next";
import CategoryList from "../../components/Category/CategoryList";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import { GetCategory } from "../../Lib/Category";

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
