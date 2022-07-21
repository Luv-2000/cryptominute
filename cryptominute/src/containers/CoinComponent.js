import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

const CoinComponent = () => {
  const coins = useSelector((state) => state.allcoins.coins);
  const renderList = coins.map((coin) => {
    const { id, name, image, current_price } = coin;

    return (
      <div class="col-md-4 col-sm-6 col-xs-12" key={id}>
        <div
          class="card mt-3 mb-2  ms-auto"
          style={{
            maxWidth: "18rem",
            maxHeight: "17rem",
            backgroundColor: "#dfdfe6",
          }}
        >
          <Link to={`/coin/${id}`} style={{ textDecoration: "none" }}>
            <img
              src={image}
              class="card-img-top"
              alt={name}
              style={{
                width: "8rem",
                height: "8rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            />
            <div class="card-body bg-light">
              <div class="card-text fw-bold fs-6" style={{}}>
                <p>{name}</p>
                <p class="text-success">Price - Rs {current_price}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div class="container">
      <div class="row">{renderList}</div>
    </div>
  );
};

export default CoinComponent;
