import { Col, Row } from "react-bootstrap";
import Illustration from "../../assets/illustration-stay-productive.png";
import IconArrow from "../../assets/icon-arrow";
import "./styles.scss";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
export default function TeamsSection() {
    const cards = [
        {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            name: "Satish Patel",
            position: "Founder & CEO, Huddle",
        },
        {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            name: "Bruce McKenzie",
            position: "Founder & CEO, Huddle",
        },
        {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            name: "Iva Boyd",
            position: "Founder & CEO, Huddle",
        },
    ];
    return (
        <section className="teams-section mt-5 ps-5 pe-3">
            <Row>
                <Col lg={6} sm={12}>
                    <img src={Illustration} alt="" />
                </Col>
                <Col lg={6} sm={12} className="mt-auto mb-auto">
                    <h2>Stay productive, wherever you are</h2>{" "}
                    <p>
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                    </p>
                    <p>
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </p>
                    <button>
                        See how Fylo works <IconArrow />
                    </button>
                </Col>
            </Row>
            <Row className="feedback-section mt-5 pt-5 ps-xs-5 pe-xs-5">
                {cards.map((card) => (
                    <Col lg={4} sm={12} key={card.name}>
                        <FeedbackCard
                            name={card.name}
                            position={card.position}
                            text={card.text}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    );
}
