import React from "react";

import styles from "../../../styles/category/createcategory.module.css";

interface IProps {
  CategoryNameChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  CreateCategorySubmitHandler: () => void;
}

const CategoryCreateTemplate = ({
  CategoryNameChangeHandler,
  CreateCategorySubmitHandler,
}: IProps) => {
  return (
    <div className="category_create_form">
      <div className={styles.category_create_inp}>
        <label htmlFor="name">Category Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Category Name"
          autoComplete="off"
          onChange={CategoryNameChangeHandler}
        />
      </div>
      <div className="category_create_btn">
        <button type="button" onClick={CreateCategorySubmitHandler}>
          Create
        </button>
      </div>
    </div>
  );
};

export default React.memo(CategoryCreateTemplate);
