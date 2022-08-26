import { Container, Row } from "reactstrap"
import TitleBlock from "../Global/TitleBlock"

export default function Overview(props) {
    return (
        <section className="overview" id="overview">
            <Container>
                <TitleBlock title={props.title} subtitle={props.subtitle} />
                <div className="iconboxes-wapper">
                    <Row>
                        {props.children}
                    </Row>
                </div>
            </Container>
        </section>
    )
}