import React, { useState, useEffect } from "react";
import axios from "axios";
import "./currentprices.css";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
const CurrentPrice = () => {
  const [coins, setCoins] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setOpen(true);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase());

  return (
    <div className="current-prices">
      <Dialog open={open} className="Dialog">
        <div className="makeStyles-paper-1">
          <div className="modalInit">
            <h1 className="coin-text">Current Prices</h1>
            <CloseIcon className="closeModalIcon" onClick={handleClose} />
          </div>
          <div className="hr2" />
          <div>
            {filteredCoins.map((coin) => (
              <div className="coin-container" onClick={handleClickOpen}>
                <div className="coin-row">
                  <div className="coin">
                    <img src={coin.image} alt="crypto" />
                    <h1>{coin.name}</h1>
                    <p className="coin-symbol">{coin.symbol}</p>
                  </div>
                  <div className="coin-data">
                    <p className="coin-price">${coin.current_price}</p>
                    <p className='coin-volume'>${coin.total_volume.toLocaleString()}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                      <p className="coin-percent red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    ) : (
                      <p className="coin-percent green">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    )}
                     <p className='coin-marketcap'>Mkt Cap: ${coin.market_cap.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
      <h1 className="coin-text">Current Prices</h1>
      {filteredCoins.map((coin) => (
        <div className="coin-container" onClick={handleClickOpen}>
          <div className="coin-row">
            <div className="coin">
              <img src={coin.image} alt="crypto" />
              <h1>{coin.name}</h1>
              <p className="coin-symbol">{coin.symbol}</p>
            </div>
            <div className="coin-data">
              <p className="coin-price">${coin.current_price}</p>
              {coin.price_change_percentage_24h < 0 ? (
                <p className="coin-percent red">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : (
                <p className="coin-percent green">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentPrice;
