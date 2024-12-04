import styles from './SignUp.module.css'
import Footer from "../components/Footer";
import LoginAuth from "../components/LoginAuth";
import SignUpAuth from "../components/SignUpAuth";
import Navbar from "../components/Navbar";

function SignUp() {
    let falseState = true;
    let sectionHeight;

    if (falseState) {
        sectionHeight = "60vh"
    } else {
        sectionHeight = "75vh";
    }

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.section} style={{ height: sectionHeight }}>
                    <div className={styles.imageContainer}><img src="sideImage.png" className={styles.sideImage} /></div>
                    <div className={styles.formContainer}>
                        {falseState ? <LoginAuth /> : <SignUpAuth />}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SignUp
