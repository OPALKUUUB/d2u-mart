import React from "react";
import Card from "../../../system/component/Card/Card";
import CardExpand from "../../../system/component/Card/CardExpand";
import CardHeader from "../../../system/component/Card/CardHeader";


const MartShop = () => {
    return (
      <section style={{margin: "200px"}}>
        <CardHeader text = "ร้านค้า"/>
        <CardExpand />
      </section>
    );
  };
  
  export default MartShop;