import { Container } from "react-bootstrap";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FlyoNav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="p-lg-5 p-2 py-5 m-0 main-container">
            <FlyoNav />
            <Header />
        </div>
    );
}

export default App;
