import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.children}>
                <h4>Exclusive</h4>
                <ul className={styles.grandChildren}>
                    <li className={styles.listItems}>Subscribe</li>
                    <li className={styles.listItems}>
                        <p>Get 10% off your first order</p>
                        <input type="text" />
                    </li>
                </ul>
            </div>
            <div className={styles.children}>
                <h4>Support</h4>
                <ul className={styles.grandChildren}>
                    <li className={styles.listItems}>120 ogunsanya drive surulere, lagos NIgeria</li>
                    <li className={styles.listItems}>bandriid@gmail.com</li>
                    <li className={styles.listItems}>+234 8177776060</li>
                </ul>
            </div>
            <div className={styles.children}>
                <h4>Account</h4>
                <ul className={styles.grandChildren}>
                    <li className={styles.listItems}>My Account</li>
                    <li className={styles.listItems}>Login / Register</li>
                    <li className={styles.listItems}>Cart</li>
                    <li className={styles.listItems}>Wishlist</li>
                    <li className={styles.listItems}>Shop</li>
                </ul>
            </div>
            <div className={styles.children}>
                <h4>Quick Link</h4>
                <ul className={styles.grandChildren}>
                    <li className={styles.listItems}>Privacy Policy</li>
                    <li className={styles.listItems}>Terms Of Use</li>
                    <li className={styles.listItems}>FAQ</li>
                    <li className={styles.listItems}>Contact</li>
                </ul>
            </div>
            <div className={styles.children}>
                <h4>Download App</h4>
                <p className={styles.para}>Save $3 with app new users only</p>
                <div className={styles.allImageContainer}>
                    <div className={styles.imgContainer}>
                        <img src="qrcode.svg" className={styles.svg} />
                    </div>
                    <div className={styles.appImageContainer}>
                        <div>
                            <img className={styles.appstoreImage} src="play.jpg" />
                        </div>
                        <div >
                            <img className={styles.playstoreImage} src="applestore.jpg" />
                        </div>
                    </div>
                </div>
                <ul className={styles.iconContainer}>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-x-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;