import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";

import styles from "../../../styles/post/createpost.module.css";

interface IProps {
  markdown: string;
  ShowContentHandler: () => void;
}

const PostMarkDownRender = ({ markdown, ShowContentHandler }: IProps) => {
  return (
    <Fragment>
      <button
        type="button"
        className={styles.show_content_btn}
        onClick={ShowContentHandler}
      >
        Show Content
      </button>
      <div className={styles.show_post_content_output}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Fragment>
  );
};

export default React.memo(PostMarkDownRender);
