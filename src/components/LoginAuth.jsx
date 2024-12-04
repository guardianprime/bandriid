import styles from './LoginAuth.module.css';


function LoginAuth() {
    return (
        <form className={styles.form}>
            <h2>Login to Bandriid</h2>
            <p>Enter your details below</p>
            <input className={styles.formInput} type="text" placeholder="Email" />
            <input className={styles.formInput} type="text" placeholder="password" />
            <div className={styles.btnContainer}>
                <button className={styles.btn}>Login</button>
                <div className={styles.forgottenPassword}><span>Forgotten password?</span></div>
            </div>
        </form>
    )
}

export default LoginAuth
