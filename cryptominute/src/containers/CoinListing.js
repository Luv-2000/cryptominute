import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CoinComponent from "./CoinComponent";
import axios from "axios";
import { setCoins } from "../redux/actions/coinActions";
const CoinListing = () => {
  const coins = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=99&page=1&sparkline=false"
        )
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(setCoins(response.data));
    };
    fetchCoins();
  }, [dispatch]);
  console.log("coins", coins);
  return (
    <div>
      <CoinComponent />
    </div>
  );
};

export default CoinListing;
