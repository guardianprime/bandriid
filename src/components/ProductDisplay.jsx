import styles from './ProductDisplay.module.css';

function ProductDisplay() {

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src='laptop.png' />
      </div>
      <div className={styles.absolute}>
        <span className={styles.discount}>-40%</span>
        <div className={styles.loveIconContainer}><span>❤</span></div>
      </div>
      <h3>Product Name</h3>
      <div className={styles.priceContainer}>
        <span>$120</span>
        <span>$160</span>
      </div>
      <div className={styles.ratingWrapper}>
        <div className={styles.ratingsContainer}>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <span className={styles.ratingNumber}>(88)</span>
      </div>
    </div>
  )

}

export default ProductDisplay;