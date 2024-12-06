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
                <section className={styles.section}>
                    <div className={styles.sidebar}>
                        <ul className={styles.list}>
                            <li>
                                <h3>Manage my Account</h3>
                                <ul className={styles.subList}>
                                    <li className={styles.selected}>My Profile</li>
                                    <li>Address book</li>
                                    <li>My payments option</li>
                                </ul>
                            </li>
                            <li>
                                <h3>My orders</h3>
                                <ul className={styles.subList}>
                                    <li>My returns</li>
                                    <li>My cancel lations</li>
                                </ul>
                            </li>
                            <li><h3>Wishlist</h3></li>
                        </ul>
                    </div>
                    <div className={styles.formContainer}>
                        <form>
                            <h3>Edit your profile</h3>
                            <div className={styles.formInputContainer}>
                                <div className={styles.formInputWrapper}>
                                    <label htmlFor="firstName" >First Name</label>
                                    <input className={styles.formInput} id="firstName" type="text" placeholder="john" />
                                </div>
                                <div className={styles.formInputWrapper}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input className={styles.formInput} type="text" id="lastName" placeholder="doe" />
                                </div>
                                <div className={styles.formInputWrapper}>
                                    <label htmlFor="email">Email</label>
                                    <input className={styles.formInput} type="email" id="email" placeholder="johndoe@gmail.com" />
                                </div>
                                <div className={styles.formInputWrapper}>
                                    <label htmlFor="address">Address</label>
                                    <input className={styles.formInput} type="text" id="address" placeholder="125 billings street, NYC." />
                                </div>
                            </div>
                            <div className={styles.passwordContainer}>
                                <label>Password changes</label>
                                <input className={styles.formInput} placeholder="current password" type="text" />
                                <input className={styles.formInput} placeholder="new password" type="text" />
                                <input className={styles.formInput} placeholder="confirm new password" type="text" />
                            </div>
                            <div className={styles.btnContainer}>
                                <span>cancel</span>
                                <button className={styles.btn}>Save changes</button>
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
