import { Row, Col } from "react-bootstrap";
import FeatureCard from "./FeatureCard/FeatureCard";
import "./Features.scss";

export default function Features() {
    const cards = [
        {
            title: "Access your files, anywhere",
            description:
                "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
            icon: "access",
        },
        {
            title: "Security you can trust",
            description:
                "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
            icon: "security",
        },
        {
            title: "Real-time collaboration",
            description:
                "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
            icon: "collaboration",
        },
        {
            title: "Store any type of file",
            description:
                "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
            icon: "store",
        },
    ];

    return (
        <section className="features-section">
            <Row className="mb-4">
                {cards.map((card, i) => {
                    return (
                        <Col lg={6} sm={12} key={i} className="mt-5 card-cell">
                            <FeatureCard
                                title={card.title}
                                description={card.description}
                                icon={card.icon}
                            />
                        </Col>
                    );
                })}
            </Row>
        </section>
    );
}
