import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.svg";
import "./Nav.scss";

export default function FlyoNav() {
    return (
        <div>
            <Navbar className="justify-content-between">
                <Container
                    fluid
                    className=" justify-content-between align-items-center"
                >
                    <Nav>
                        <Navbar.Brand href="/">
                            <img src={Logo} alt="" className="logo" />
                        </Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Team</Nav.Link>
                        <Nav.Link>Sign in</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
