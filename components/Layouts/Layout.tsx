import React from "react";
import Header from "./Header/Header";

import styles from "../../styles/layouts/layout.module.css";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
