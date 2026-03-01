//edited

import {useState,useEffect} from "react";
import axios from "axios";

// import { positions } from "../data/data";

const Positions = () => {

  const [allPositions,setAllPositions] = useState([]);

  // useEffect will execute for the single time only as "[]" is passed
  useEffect(()=>{
    const token = localStorage.getItem("token");
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
    axios.get(`${backendUrl}/allPositions`, {
      headers: {
        token: "Bearer " + token
      }
    }).then((res)=>{
      setAllPositions(res.data);
    });
  },[])

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock,index)=>{
            const curValue = stock.price*stock.qty;
            const isProfit = curValue - stock.avg*stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";// profit,loss are classes used for styling
            const dayClass = stock.isLoss ? "loss" : "profit";//isLoss is a field*(propertie) in stock data
          
            return(
              <tr key={index} >
                {/* table data */}
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td> {/*toFixed(2) used to write no upto 2 decimal places */}
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>{(curValue - stock.avg*stock.qty).toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
