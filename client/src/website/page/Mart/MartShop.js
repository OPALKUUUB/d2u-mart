import React from "react";
import Card from "../../../system/component/Card/Card";
import CardExpand from "../../../system/component/Card/CardExpand";
import CardHeader from "../../../system/component/Card/CardHeader";
import SubCard from "../../../system/component/SubCard/SubCard";
import "./MartMenu.css";


const MartShop = () => {
    return (
      <section style={{margin: "200px"}}>
        <CardHeader text = "ร้านค้า"/>
          <SubCard text = "DAISO"/>
          <SubCard text = "DAISO"/>
          <SubCard text = "DAISO"/>
          <SubCard text = "DAISO"/>
      </section>
    );
  };
  
  export default MartShop;