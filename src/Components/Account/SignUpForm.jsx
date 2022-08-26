import { Link } from "react-router-dom"

export default function SignUpForm() {
    return (
        <div className="form-block">
            <form action="">
                <div className="field">
                    <input type="text" name="username" id="username" placeholder="Name*" required />
                </div>
                <div className="field">
                    <input type="email" name="email" id="email" placeholder="Email*" required />
                </div>
                <div className="field">
                    <input type="password" name="password" id="password" placeholder="Password*" required />
                </div>
                <div className="field terms">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">I have read and agree with <Link to="#">terms of service</Link> & our <Link to="#">privacy policy</Link></label>
                </div>
                <div className="action">
                    <button type="submit">Create Account</button>
                </div>
            </form>
            <div className="already-login">
                <p>Already have an account? <Link to="/signin">Back to login</Link></p>
            </div>
        </div>
    )
}