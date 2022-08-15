import React from "react";

import styles from "../../../styles/post/createpost.module.css";

interface IProps {
  CreatePostInputStateChangeHandler: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  PostCreateSubmitHandler: () => void;
  ShowContentHandler: () => void;
  createPostInputState: {
    title: string;
    content: string;
  };
  author: string;
}

const PostCraeteTemplate = ({
  CreatePostInputStateChangeHandler,
  PostCreateSubmitHandler,
  ShowContentHandler,
  createPostInputState,
  author,
}: IProps) => {
  return (
    <form className="post_create_form">
      <div className="post_author_name">
        <label>Author: </label>
        <input value={author} disabled />
      </div>
      <div className={styles.post_create_inp}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter ..."
          autoComplete="off"
          value={createPostInputState.title}
          onChange={CreatePostInputStateChangeHandler}
        />
      </div>
      <div className={styles.post_create_inp}>
        <label htmlFor="content">Content</label>
        <button
          type="button"
          className={styles.show_content_btn}
          onClick={ShowContentHandler}
        >
          Show Content
        </button>
        <textarea
          name="content"
          id="content"
          placeholder="Enter ..."
          autoComplete="off"
          value={createPostInputState.content}
          onChange={CreatePostInputStateChangeHandler}
        />
      </div>
      <div className="post_create_btn">
        <button type="button" onClick={PostCreateSubmitHandler}>
          Create
        </button>
      </div>
    </form>
  );
};

export default React.memo(PostCraeteTemplate);
