import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/allOrders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>

          <Link to="/" className="btn">
            Get Started
          </Link>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Type</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Total</th>
               
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const total = order.qty * order.price;

                return (
                  <tr key={order._id}>
                    <td>{order.name}</td>

                    <td
                      className={
                        order.mode === "BUY" ? "profit" : "loss"
                      }
                    >
                      {order.mode}
                    </td>

                    <td>{order.qty}</td>

                    <td>₹{order.price.toFixed(2)}</td>

                    <td>₹{total.toFixed(2)}</td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;