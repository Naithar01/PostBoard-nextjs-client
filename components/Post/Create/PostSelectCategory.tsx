import React, { Fragment } from "react";
import { Category } from "../../../pages/category";

interface IProps {
  CategoryList: Category[];
  CreatePostSelectChangeHandler: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const PostCategorySelect = ({
  CategoryList,
  CreatePostSelectChangeHandler,
}: IProps) => {
  return (
    <Fragment>
      <label htmlFor="category_select">Categroy: </label>
      <select
        className="post_select_category"
        id="category_select"
        onChange={CreatePostSelectChangeHandler}
      >
        <option value="">Selcet Category</option>
        {CategoryList.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default React.memo(PostCategorySelect);
