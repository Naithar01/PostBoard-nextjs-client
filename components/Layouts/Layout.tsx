import React, { Fragment } from "react";
import Header from "./Header/Header";

import styles from "../../styles/layouts/layout.module.css";
import Head from "next/head";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Fragment>
      <Head>
        <title>Board</title>
      </Head>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
