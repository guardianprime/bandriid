import styles from './Checkout.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.section}>
                    <div>
                        <ul>
                            <li>Product</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Subtotal</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <img />
                                    <span>Lcd monitor</span>
                                </div>
                                <div>
                                    <span>$650</span>
                                </div>
                                <select>
                                    <option>
                                        1
                                    </option>
                                </select>
                                <div>
                                    <span>$650</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img />
                                    <span>h1 gamepad</span>
                                </div>
                                <div>
                                    <span>$550</span>
                                </div>
                                <div>
                                    <select>
                                        <option>02</option>
                                    </select>
                                </div>
                                <div>
                                    <span>$1100</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button>Return to shop</button>
                        <button>Update cart</button>
                    </div>
                    <div>
                        <input type="text" placeholder="coupon code" />
                        <button>Apply coupon</button>
                    </div>
                    <div>
                        <h4>Cart Total</h4>
                        <div>
                            <span>subtotal</span>
                            <span>$1750</span>
                        </div>
                        <div>
                            <span>Shipping:</span>
                            <span>free</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Cart;
