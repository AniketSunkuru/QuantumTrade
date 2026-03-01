import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Orders = () => {

  const[allOrders,setAllOrders] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
    axios.get(`${backendUrl}/allOrders`, {
      headers: {
        token: "Bearer " + token
      }
    }).then((res)=>{
      setAllOrders(res.data);
    });
  },[])

  const deleteOrder =async(id)=>{
    try{
      const token = localStorage.getItem("token");
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
      await axios.delete(`${backendUrl}/deleteOrder/${id}`, {
        headers: {
          token: "Bearer " + token
        }
      });
      setAllOrders(allOrders.filter(order => order.id !== id));
    }catch(error){
      console.log("Error deleting order",error);
    }
  };

  return (
    <div className="orders">
     {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
     ):(
      <div className="order-table">
        <table>
          <tr>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
            {allOrders.map((order)=>{
              return(
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                <td>
                  <button onClick={()=>deleteOrder(order._id)}>Delete</button>
                </td>
              </tr>
              )
          })}
        </table>
      </div>
     )}

    </div>
  );
};

export default Orders;
