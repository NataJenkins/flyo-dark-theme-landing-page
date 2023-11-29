import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FlyoNav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import TeamsSection from "./Components/Teams/TeamsSection";
import Signup from "./Components/Signup/Signup";

function App() {
    return (
        <div className="p-lg-5 p-3 m-0 main-container">
            <FlyoNav />
            <Header />
            <Features />
            <TeamsSection />
            <Signup />
        </div>
    );
}

export default App;
