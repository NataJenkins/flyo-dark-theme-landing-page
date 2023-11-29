import PropTypes from "prop-types";
import Satish from "../../../assets/profile-1.jpg";
import Bruce from "../../../assets/profile-2.jpg";
import Iva from "../../../assets/profile-3.jpg";
import { Container } from "react-bootstrap";
import "./FeedbackCard.scss";

export default function FeedbackCard({ text, name, position }) {
    const getPicture = () => {
        switch (name) {
            case "Satish Patel":
                return Satish;

            case "Bruce McKenzie":
                return Bruce;

            case "Iva Boyd":
                return Iva;

            default:
                break;
        }
    };

    return (
        <Container className="feedback-card-container mt-3 mt-lg-5 p-4">
            <p>{text}</p>
            <Container className="d-flex mt-3 p-0">
                <img src={getPicture()} alt="" className="me-2" />
                <div className="name-and-position ">
                    <p className="name">{name}</p>
                    <p className="position">{position}</p>
                </div>
            </Container>
        </Container>
    );
}

FeedbackCard.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    text: PropTypes.string,
};
