import styles from './SignUpAuth.module.css'

function SignUpAuth() {
    return (
        <form className={styles.form}>
            <h1>Create an Account</h1>
            <p>Enter your details below</p>
            <input className={styles.formInput} type="text" placeholder="Full name" />
            <input className={styles.formInput} type="text" placeholder="Email" />
            <input className={styles.formInput} type="text" placeholder="password" />
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Create account</button>
                <button className={styles.btn}>Sign up with google</button>
            </div>
            <p>Already have an account? <a href="#">Log in</a></p>
        </form>
    )
}

export default SignUpAuth
