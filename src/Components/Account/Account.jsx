import { Container, Row, Col } from "reactstrap"
import TitleBlock from "../Global/TitleBlock"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"

export default function Account(props) {
    const img_url = (img) => require('../../assets/images/' + img)

    return (
        <section className="account">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="img-block">
                            <img src={img_url(props.img_url)} alt={props.title} className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-container">
                            <TitleBlock title={props.title} />
                            <div className="content">
                                <p>{props.content}</p>
                            </div>
                            {props.component === "signup" ? <SignUpForm /> : <SignInForm />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}