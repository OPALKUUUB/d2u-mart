import React from "react";
import { Route, Routes } from "react-router-dom";
import { Auction } from "./Auction/Auction";
import { History } from "./History/History";
import { Order } from "./Order/Order";
import { Payment } from "./Payment/Payment";
import { Tracking } from "./Tracking/Tracking";

export const Yahoo = () => {
  return (
    <div style={{ marginTop: "130px" }}>
      <Routes>
        <Route path="" element={<Auction />} />
        <Route path="auction" element={<Auction />} />
        <Route path="order" element={<Order />} />
        <Route path="payment" element={<Payment />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
};
