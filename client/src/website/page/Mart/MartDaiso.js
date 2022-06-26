import "./MartMenu.css";
import SubCard from "../../../system/component/SubCard/SubCard";
import SearchBox from "../../../system/component/searchbox/SearchBox";

const MartDaiso = () => {
    return (
        <section>
            <img src="/image/daisoCover.png" className="cover" alt=""></img>
            <div>
                <img src="/image/side.png" className="side" alt=""></img>
                <img src="/image/promotionText.png" className="promotion" alt=""></img>
                <div className="content-right">
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                </div>
            </div>
            <img src="/image/break.png" className="break" alt=""></img>
            <div className="product">
                <img src="/image/product.png" className="productHeader" alt=""></img>
                <img src="/image/side.png" className="sideProduct" alt=""></img>
                <div className="content-left">
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                    <SubCard text = "DAISO"/>
                </div>
            </div>
        </section>
      );
  };
  
export default MartDaiso;