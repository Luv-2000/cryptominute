import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
const CoinDetail = () => {
  const coinId = useParams();
  // console.log(coinId.coinId);
  let coinDetails = null;
  const coins = useSelector((state) => state.allcoins.coins);
  for (let i = 0; i < 100; i++) {
    // console.log(coins[i].id);
    // console.log(typeof coins[i].id);
    // console.log(coinId.coinId);
    // console.log(typeof coinId.coinId);
    if (coins[i].id === coinId.coinId) {
      coinDetails = coins[i];
      break;
    }
  }
  console.log(coinDetails);
  const {
    id,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    high_24h,
    low_24h,
  } = coinDetails;

  return (
    <div style={{ height: "100vh" }}>
      <div class=" justify-content-center mb-5 " key={id}>
        <div
          class="card mt-5 m-auto "
          style={{
            maxWidth: "40rem",
            maxHeight: "35rem",
            backgroundColor: "#dfdfe6",
          }}
        >
          <div>
            <img
              src={image}
              class="card-img-top"
              alt={name}
              style={{
                width: "12rem",
                height: "12rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            />
            <div class="card-body bg-light">
              <div class="card-text fw-bold fs-6" style={{}}>
                <p class="fs-5 text-primary ">{name}</p>
                <p class="text-success fw-bold">Price - Rs {current_price}</p>
                <p class="text-info">Market Cap -{market_cap}</p>
                <p class="text-info">Market Cap Rank-{market_cap_rank}</p>
                <p class="text-info">Highest Price(24h)-{high_24h}</p>
                <p class="text-info">Lowest Price(24h)-{low_24h}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
