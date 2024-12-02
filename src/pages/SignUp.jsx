import Footer from "../components/Footer";
import LoginAuth from "../components/LoginAuth";
import SignUpAuth from "../components/SignUpAuth";
import Navbar from "../components/Navbar";

function SignUp() {
    let falseState = true;
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div><img /></div>
                    {falseState ? <LoginAuth /> : <SignUpAuth />}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SignUp
