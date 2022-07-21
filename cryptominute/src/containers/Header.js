import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="p-2" style={{ backgroundColor: " #353536" }}>
      <h1>
        <Link
          to="/"
          class="text-warning sticky-top"
          style={{ textDecoration: "none" }}
        >
          CryptoMinute
        </Link>
      </h1>
    </div>
  );
};

export default Header;
