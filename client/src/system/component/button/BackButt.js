import { useNavigate } from "react-router-dom";
import "./BackButt.css";

const BackButt = (Name) => {
    const navigate = useNavigate()
    return (
        <div className="Header">
            <button type="button" className="backButt" onClick={()=>navigate(Name.link)}>
                <span>กลับ </span>
            </button>
        </div>
    );
};

export default BackButt;