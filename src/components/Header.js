import React from "react";
import styles from "../styles/header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => (
  <React.Fragment>
    <header className={styles.header}>
      <h1 className={styles.h1}>Vakhtang Nodadze Book API</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink to="/Book-API">Home</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/Book-API/favourites">Favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </React.Fragment>
);

export default Header;
