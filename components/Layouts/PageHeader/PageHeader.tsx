import React from "react";
import styles from "../../../styles/index.module.css";

interface IProps {
  header_text: string | string[] | undefined;
}

const PageHeader = ({ header_text }: IProps) => {
  return (
    <div className={styles.page_header}>
      <h1>{header_text}</h1>
    </div>
  );
};

export default React.memo(PageHeader);
