import PropTypes from "prop-types";
import Access from "../../../assets/icon-access-anywhere.svg";
import Security from "../../../assets/icon-security.svg";
import Collaboration from "../../../assets/icon-collaboration.svg";
import Store from "../../../assets/icon-any-file.svg";
import "./FeatureCard.scss";

export default function FeatureCard({ title, icon, description }) {
    const getIcon = () => {
        switch (icon) {
            case "access":
                return Access;
            case "security":
                return Security;
            case "collaboration":
                return Collaboration;
            case "store":
                return Store;

            default:
                break;
        }
    };
    return (
        <div className="card-container">
            <img src={getIcon()} alt="" className="mb-3" />
            <h2 className="mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
        </div>
    );
}

FeatureCard.propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
};
