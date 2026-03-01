import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = ()=>{
    const token = localStorage.getItem("token");
    axios.post("http://localhost:3002/newOrder", {
      name:uid,
      qty:stockQuantity,
      price:stockPrice,
      mode:"SELL",
    }, {
      headers: {
        token: "Bearer " + token
      }
    })
    GeneralContext.closeSellWindow();
  }

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>   {/*the "value={stockQuantity}" field part is displayed to the user  */}
            <input type="number" name="qty" id="qty" onChange={(event) => setStockQuantity(event.target.value)} value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" onChange={(event) => setStockPrice(event.target.value)} value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
