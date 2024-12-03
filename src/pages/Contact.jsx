import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.section}>
                    <div className={styles.wordContainer}>
                        <div className={styles.wordWrapper}>
                            <div className={styles.wordIconContainer}>
                                <div className={styles.iconContainer}><i className="fa-solid fa-phone"></i></div>
                                <h3 className={styles.words}>Call to us</h3>
                            </div>
                            <p className={styles.para}>We are open 24/7, 7 days a week.</p>
                            <p className={styles.para}>Our phone line +234 81 7777 6060</p>
                        </div>
                        <div className={styles.wordWrapper}>
                            <div className={styles.wordIconContainer}>
                                <div className={styles.iconContainer}><i className="fa-regular fa-envelope"></i></div>
                                <h3 className={styles.words}>Write to us</h3>
                            </div>
                            <p className={styles.para}>Fill out our form and we will contact you within 24 hours</p>
                            <p className={styles.para}>Email: customer@bandriid.com</p>
                            <p className={styles.para}>Email: support@bandriid.com</p>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.inputContainer}>
                            <input className={styles.input} placeholder="Your name" type="text" required />
                            <input className={styles.input} placeholder="Your email" type="email" required />
                            <input className={styles.input} placeholder="Your phone" type="number" required />
                        </div>
                        <textarea className={styles.textArea} placeholder="Your message"></textarea>
                        <button className={styles.button}>Send a message</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact
