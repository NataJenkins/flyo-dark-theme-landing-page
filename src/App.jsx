import { Container } from "react-bootstrap";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FlyoNav from "./Components/Nav/Nav";

function App() {
    return (
        <Container className="p-lg-5 p-2 py-5">
            <FlyoNav />
        </Container>
    );
}

export default App;
