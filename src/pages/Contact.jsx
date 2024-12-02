import styles from './Contact.module.css';

function Contact() {
    return (
        <section>
            <div>
                <div>
                    <h3>Call to us</h3>
                    <p>We are open 24/7, 7 days a week.</p>
                    <p>Our phone line +234 81 7777 6060</p>
                </div>
                <div>
                    <h3>Write to us</h3>
                    <p>Fill out our form and we will contact you within 24 hours</p>
                    <p>Email: customer@bandriid.com</p>
                    <p>Email: support@bandriid.com</p>
                </div>
            </div>
            <form className={styles.form}>
                <input placeholder="your name" type="text" />
                <input placeholder="your email" type="email" />
                <input placeholder="your phone" type="number" />
                <textarea></textarea>
                <button>Send a message</button>
            </form>
        </section>
    )
}

export default Contact
