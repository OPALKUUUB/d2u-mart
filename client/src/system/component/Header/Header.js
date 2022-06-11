import { useNavigate } from "react-router-dom";

const Header = (Name) => {
    const navigate = useNavigate()
    return (
        <div style="background: url(https://bootstrapious.com/i/snippets/sn-bg-image/bg.jpg)">

            <div className="Header-container">
            <h1>{Name.text}</h1>
            </div>
        </div>
    );
};

export default Header;