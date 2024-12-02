function SignUpAuth() {
    return (
        <section>
            <h1>Create an Account</h1>
            <p>Enter your details below</p>
            <form>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="password" />
                <button>Create account</button>
                <button>Sign up with google</button>
            </form>
            <p>Already have an account? <a href="#">Log in</a></p>
        </section>
    )
}

export default SignUpAuth
