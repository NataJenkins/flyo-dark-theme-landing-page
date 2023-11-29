import "./Footer.scss";
import Logo from "../../assets/logo.svg";
import Location from "../../assets/icon-location.svg";
import Phone from "../../assets/icon-phone.svg";
import Mail from "../../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <img src={Logo} alt="" />
                <div className="footer_info">
                    <div className="item item-location">
                        <img src={Location} alt="" className="icon" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </p>
                    </div>
                    <div className="item item-contact">
                        <div>
                            <img src={Phone} alt="" className="icon" />
                            <p>+1-543-123-4567</p>
                        </div>
                        <div>
                            <img src={Mail} alt="" className="icon" />
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <div className="item item-about">
                        <p>About us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                    </div>
                    <div className="item item-contact">
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                    <div className="item item-social-media">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
