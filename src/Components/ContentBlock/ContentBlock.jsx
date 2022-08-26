import { Container, Row, Col } from "reactstrap"
import TitleBlock from "../Global/TitleBlock"
import { Link } from "react-router-dom"

export default function ContentBlock(props) {
    const ImageRight = () => {
        if (props.img_position === "right") {
            return (
                <Col md={6}>
                    <div className="img-block">
                        <img src={props.img_url} className="img-fluid" alt={props.title} />
                    </div>
                </Col>
            )
        }
    }

    const ImageLeft = () => {
        if (props.img_position === "left") {
            return (
                <Col md={6}>
                    <div className="img-block">
                        <img src={props.img_url} className="img-fluid" alt={props.title} />
                    </div>
                </Col>
            )
        }
    }


    const btn_classes = (props.button_extra_classes) ? 'th-btn ' + props.button_extra_classes : 'th-btn';

    return (
        <section className={(props.img_position === "left") ? "content-block left" : "content-block right"}>
            <Container>
                <Row>
                    <ImageLeft />
                    <Col md={6}>
                        <div className="content">
                            <TitleBlock title={props.title} subtitle={props.subtitle} />
                            <div className="dis">{props.children}</div>
                            <Link to={props.button_link} className={btn_classes}>{props.button_text} <span className="btn-arrow"></span></Link>
                        </div>
                    </Col>
                    <ImageRight />

                </Row>
            </Container>
        </section>
    )
}