import { Container } from "reactstrap"
import { Link } from "react-router-dom"
export default function Hero (props) {
    return (
        <section className="hero">
            <Container>
                <div className="content-block">
                    <h1>Personal <span>Cloud Computer</span> That You Can Own Completely</h1>
                    <p className="my-4">{props.content}</p>
                    <Link to={props.button_link} className="th-btn">{props.button_text} <span className="btn-arrow"></span></Link>
                </div>
            </Container>
        </section>
    )
}