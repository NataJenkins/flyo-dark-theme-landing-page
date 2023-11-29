import { useState } from "react";
import "./Signup.scss";

export default function Signup() {
    const [formData, setFormData] = useState({ email: "" });
    const [formErrors, setFormErrors] = useState({ email: "" });

    const handlesubmit = (e) => {
        e.preventDefault();
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            errors.email = "Error, please check your email";
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: value,
        });
    };

    return (
        <section className="signup-section">
            <div className="signup-card-container p-5">
                <h2>Get early access today</h2>
                <p>
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <form onSubmit={handlesubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className={formErrors.email ? "error" : undefined}
                        />
                        {formErrors.email && (
                            <>
                                <p className="error-span">{formErrors.email}</p>
                            </>
                        )}
                    </div>
                    <button type="submit" id="submit">
                        Get Started For Free
                    </button>
                </form>
            </div>
        </section>
    );
}
