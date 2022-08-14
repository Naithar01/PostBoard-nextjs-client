import { useRouter } from "next/router";
import React, { useState } from "react";
import CreateCategoryTemplate from "../../components/Category/create/CreateCategoryTemplate";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import { CreateCategory } from "../../Lib/Category";

const CategoryCreatePage = () => {
  const rotuer = useRouter();
  const [categoryName, setCategoryName] = useState<string>("");

  const CategoryNameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryName(e.target.value);
  };

  const CreateCategorySubmitHandler = async () => {
    if (categoryName.trim().length === 0) {
      return alert("Enter Category Name");
    }

    await CreateCategory(categoryName)
      .then((res: Response) => {
        if (res.status !== 201) {
          throw new Error("Enter Another Category name");
        }
        alert("Success Create Category");
        return rotuer.push("/category");
      })
      .catch((err: Error) => {
        return alert(`Create Fail\n${err.message}`);
      });
  };

  return (
    <div className="create_category_page">
      <PageHeader header_text="Create Category" />
      <CreateCategoryTemplate
        CategoryNameChangeHandler={CategoryNameChangeHandler}
        CreateCategorySubmitHandler={CreateCategorySubmitHandler}
      />
    </div>
  );
};

export default CategoryCreatePage;
