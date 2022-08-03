import React from "react";

interface IProps {
  CreatePostInputStateChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const PostCraeteTemplate = ({ CreatePostInputStateChangeHandler }: IProps) => {
  return (
    <form className="post_create_form">
      <div className="post_create_inp">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter ..."
          autoComplete="off"
          onChange={CreatePostInputStateChangeHandler}
        />
      </div>
      <div className="post_create_inp">
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Enter ..."
          autoComplete="off"
          onChange={CreatePostInputStateChangeHandler}
        />
      </div>
      <div className="post_create_btn">
        <button type="button">Create</button>
      </div>
    </form>
  );
};

export default PostCraeteTemplate;
