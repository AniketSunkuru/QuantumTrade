//edited
   
import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
//material UI
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //this logic is to get data from api
  // const [loading, setLoading] = useState(false);
  // const API_KEY = "4a6acefe297746c7a7562f33e25cda7d";
  // const fetchStocks = async () => {
  //   if (!API_KEY) {
  //     console.error("Missing API Key. Check .env file.");
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     const symbols = "INFY,TCS,RELIANCE,WIPRO";
  //     const res = await fetch(
  //       `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${API_KEY}`
  //     );
  //     const data = await res.json();
  //     console.log("API RESPONSE:", data);
  //     // Handle global API errors
  //     if (data.status === "error" || data.code === 429) {
  //       console.error("API ERROR:", data.message);
  //       return;
  //     }
  //     const formatted = Object.values(data)
  //       .filter(
  //         (stock) =>
  //           stock &&
  //           stock.symbol &&
  //           stock.close &&
  //           stock.percent_change !== undefined
  //       )
  //       .map((stock) => ({
  //         name: stock.symbol,
  //         price: parseFloat(stock.close),
  //         percent: stock.percent_change
  //           ? stock.percent_change + "%"
  //           : "0%",
  //         isDown: parseFloat(stock.percent_change || 0) < 0,
  //       }));
  //     setWatchlist(formatted);
  //   } catch (err) {
  //     console.error("Fetch failed:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchStocks();
  //   const interval = setInterval(fetchStocks, 30000);
  //   return () => clearInterval(interval);
  // }, []);



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
   const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} onClick={handleSellClick}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};