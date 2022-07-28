import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/layouts/header.module.css";

const Header = () => {
  const [showHeaderNavigation, setShowHeaderNavigation] = useState(false);

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
            <li className={styles.right_header_menu_item}>
              <Link href="/user/login">Login</Link>
            </li>
            <li className={styles.right_header_menu_item}>
              <Link href="/user/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
