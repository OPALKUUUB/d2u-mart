import React from "react";
import Card from "../../../system/component/Card/Card";


const Mart = () => {
    return (
      <section style={{margin: "200px"}}>
        <Card text = "ร้านค้า" link = "MartShop"/>
        <Card text = "โปรโมชั่น"/>
        <Card text = "หมวดหมู่"/>
      </section>
    );
  };
  
  export default Mart;