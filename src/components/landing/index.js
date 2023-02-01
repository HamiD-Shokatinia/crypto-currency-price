import { useEffect, useState } from "react";
import { getCryptoData } from "../../services/api";
import Coins from "../coin-paint";
import styles from "./landing.module.css";
import ReactLoading from "react-loading";

function Landing() {
  const [coin, setCoin] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const serached = coin.filter((item) => item.name.includes(searchItem));

  useEffect(() => {
    const getCoin = async () => {
      setCoin(await getCryptoData());
    };
    getCoin();
  }, []);

  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  console.log(coin);

  return (
    <>
      {coin.length<1 ? (
        <ReactLoading
          className={styles.Loading}
          type={"bubbles"}
          color={"#3498db"}
          height={100}
          width={150}
        />
      ) : (
        <>
          <input
            className={styles.input}
            placeholder="Enter Crypto Currency"
            value={searchItem}
            onChange={(e) => {
              handleSearchItem(e);
            }}
          />

          <div className={styles.coinContainer}>
            {coin &&
              serached.map((item) => {
                return (
                  <Coins
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    symbol={item.symbol}
                    price={item.current_price}
                    marketCap={item.market_cap}
                    priceChange={item.price_change_percentage_24h}
                  />
                );
              })}
          </div>
        </>
      )}
    </>
  );
}
export default Landing;
