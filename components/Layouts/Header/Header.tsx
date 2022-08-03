import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "../../../styles/layouts/header.module.css";

const Header = () => {
  const [showHeaderNavigation, setShowHeaderNavigation] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    const { test } = cookies;
    if (test) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [cookies]);

  return (
    <div className={styles.header_wrap}>
      <header className="header">
        <p className={styles.header_logo}>
          <Link href="/">Header Logo</Link>
        </p>
      </header>
      <nav className="header_nav_wrap">
        <div className="right_header_wrap">
          <ul className={styles.right_header_menu}>
            {/* No Login */}
            {!isLogin && (
              <Fragment>
                <li className={styles.right_header_menu_item}>
                  <Link href="/user/login">Login</Link>
                </li>
                <li className={styles.right_header_menu_item}>
                  <Link href="/user/register">Register</Link>
                </li>
              </Fragment>
            )}
            {/* Login */}
            {isLogin && (
              <Fragment>
                <li className={styles.right_header_menu_item}>
                  <Link href="/post">Posts</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
