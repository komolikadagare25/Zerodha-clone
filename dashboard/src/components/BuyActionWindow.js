import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";


import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [balance, setBalance] = useState(0);

  const handleBuyClick = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/buy`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "buy",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      generalContext.closeBuyWindow();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/wallet`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBalance(res.data.balance);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWallet();
  }, []);


  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Available Balance: ₹{balance}</span>
        <div>
          <Link to="" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;