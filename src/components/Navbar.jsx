import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>Bandriid</p>
            <ul className={styles.ul}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <div className={styles.searchDiv}>
                <input type="text" placeholder="What are you looking for" />
                <span className={styles.icons}><i className="fa-regular fa-heart"></i></span>
                <span className={styles.icons}><i className="fa-solid fa-cart-shopping"></i></span>

            </div>
        </nav>
    )
}

export default Navbar;