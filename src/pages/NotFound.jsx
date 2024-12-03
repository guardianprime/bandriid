import styles from './NotFound.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.section}>
                    <h1 className={styles.headerOne}>404 not found</h1>
                    <p>your visited page not found. you may go back to home page</p>
                    <button className={styles.btn}>Back to home page</button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default NotFound
