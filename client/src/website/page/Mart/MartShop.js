import React from "react";
import Card from "../../../system/component/Card/Card";
import CardExpand from "../../../system/component/Card/CardExpand";
import CardHeader from "../../../system/component/Card/CardHeader";
import MartHeader from "../../../system/component/MartHeader/MartHeader";
import SubCard from "../../../system/component/SubCard/SubCard";
import BackButt from "../../../system/component/button/BackButt";
import "./MartMenu.css";


const MartShop = () => {
    return (
      <section>
        <BackButt link = "/mart"/>
        <img src="/image/martCover.png" className="cover" alt=""></img>
        <div className="Menu-Content">
          <SubCard text = "DAISO" link = "/mart/MartDaiso"/>
          <SubCard text = "DAISO" link = "/mart/MartDaiso"/>
          <SubCard text = "DAISO" link = "/mart/MartDaiso"/>
          <SubCard text = "DAISO" link = "/mart/MartDaiso"/>
        </div>
      </section>
    );
  };
  
export default MartShop;