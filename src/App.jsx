import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FlyoNav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";

function App() {
    return (
        <div className="p-lg-5 p-2 m-0 main-container">
            <FlyoNav />
            <Header />
            <Features />
        </div>
    );
}

export default App;
