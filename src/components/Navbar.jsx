import { NavLink, Link } from "react-router";
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>Bandriid</p>
            <ul className={styles.ul}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </ul>
            <div className={styles.searchDiv}>
                <input type="text" placeholder="What are you looking for" />
                <Link to="/wishlist"><span className={styles.icons}><i className="fa-regular fa-heart"></i></span></Link>
                <Link to="/cart"><span className={styles.icons}><i className="fa-solid fa-cart-shopping"></i></span></Link>
                <Link to="/account"><span className={styles.icons}><i className="fa-solid fa-user"></i></span></Link>
            </div>
        </nav>
    )
}

export default Navbar;