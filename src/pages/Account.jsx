import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import styles from './Account.module.css';

function Account() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div>
                        <ul>
                            <li>
                                Manage my Account
                                <ul>
                                    <li>My Profile</li>
                                    <li>Address book</li>
                                    <li>My payments option</li>
                                </ul>
                            </li>
                            <li>
                                My orders
                                <ul>
                                    <li>My returns</li>
                                    <li>My cancellations</li>
                                </ul>
                            </li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                    <div className={styles.formContainer}>
                        <form>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" />
                            <label>Password changes</label>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <div>
                                <span>cancel</span>
                                <button>Save changes</button>
                            </div>
                        </form>
                    </div>
                </section >
            </main >
            <Footer />
        </>
    )
}

export default Account
