import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../../store/reducers/userSlice";
import { RootState } from "../../../store/store";
import styles from "../../../styles/layouts/header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
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
            {/* No Login */}
            {!user.isLogin && (
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
            {user.isLogin && (
              <Fragment>
                <li className={styles.right_header_menu_item}>
                  <Link href="/post">Posts</Link>
                </li>
                <li className={styles.right_header_menu_item}>
                  <button
                    type="button"
                    className={styles.right_header_menu_item_user_logout}
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    LogOut
                  </button>
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
