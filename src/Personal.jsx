import './App.css';
import { useNavigate } from 'react-router-dom';


function Personal() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="back-link" onClick={() => navigate("../")} style={{ marginTop: "3%", marginLeft: "2%" }}>Back</div>
            <div className="background"></div>
            <div className="personal-container" style={{ marginRight: "2%" }}>
                <div className="personal-img-holder">
                    <div className="personal-text">
                        Software Engineer with a passion for mathematics, motivated by the pursuit of discovery and the advancement of knowledge through the use and refinement of cutting-edge tools. I’m committed to carving out a role where I can meaningfully contribute to large-scale progress, and I’m continually motivated to write clean, maintainable code in support of this goal.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personal;