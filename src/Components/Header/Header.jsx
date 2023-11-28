import { Container } from "react-bootstrap";
import Illustration from "../../assets/illustration-intro.png";
import "./Header.scss";

export default function Header() {
    return (
        <main className="header-main">
            <Container className="container-sm mt-4 mt-lg-5">
                <img src={Illustration} alt="" />
                <h1 className="mt-3">
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className="mt-3">
                    Fylo stores all your most important files in one secure
                    location. Access them wherever you need, share and
                    collaborate with friends family, and co-workers.
                </p>
                <button className="mt-3">Get Started</button>
            </Container>
        </main>
    );
}
