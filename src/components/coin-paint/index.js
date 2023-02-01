import styles from '../coin-paint/coins.module.css'
function Coins(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt={props.image} className={styles.image} />
      <span className={styles.name}>{props.name}</span>
      <span className={styles.symbol}>{props.symbol}</span>
      <span className={styles.currentPrice}>
        ${props.price.toLocaleString()}
      </span>
      <span
        className={
          props.priceChange > 0
            ? styles.greenPriceChange
            : styles.redPriceChange
        }
      >
        {props.priceChange} %
      </span>
      <span className={styles.marketCap}>
        ${props.marketCap.toLocaleString()}
      </span>
    </div>
  );
}

export default Coins;
