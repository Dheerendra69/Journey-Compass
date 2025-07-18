import React, { useState } from "react";
import { useAuth } from "../hooks";
import { NavLink } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { motion } from "framer-motion";

function Navbar() {
  const { isAuth, authUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <NavLink className={styles.brand} to="/" end>
          Journey-Compass
        </NavLink>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>
            <NavLink className={styles.link} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/blogs" end>
              Blogs
            </NavLink>
          </li>

          {isAuth ? (
            <>
              <li>
                <NavLink className={styles.link} to="/editor">
                  New Post
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/settings">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to={`/@${authUser?.username}`}>
                  Hi {authUser?.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className={styles.link} to="/register">
                  Sign up
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/login">
                  Sign in
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
