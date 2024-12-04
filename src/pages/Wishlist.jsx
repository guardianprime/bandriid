import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";


function Wishlist() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div>
                        <p>Wishlist</p>
                        <p>Move all to bag</p>
                    </div>
                    <div>
                        <div>bread</div>
                        <div>bread</div>
                        <div>bread</div>
                        <div>bread</div>
                    </div>
                </section>
                <BestSelling />
            </main>
            <Footer />
        </>
    )
}

export default Wishlist
