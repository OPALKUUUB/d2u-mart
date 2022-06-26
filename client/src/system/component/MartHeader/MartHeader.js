import { useNavigate } from "react-router-dom";
import "./MartHeader.css";

const MartHeader = (Name) => {
    const navigate = useNavigate()
    return (
        <img src="/image/martCover.png" className="cover" alt=""></img>
    );
};

export default MartHeader;