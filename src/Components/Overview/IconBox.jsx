import { Col } from "reactstrap"

export default function IconBox(props) {
    const iconboxClasses = (props.extraClasses) ? props.extraClasses : ''

    return (
        <Col lg={props.lg} md={props.md} className={iconboxClasses}>
            <div className="icon-box">
                <div className="img-block">
                    <img src={props.img_url} alt={props.title} />
                </div>
                <div className="dis">
                    <h4>{props.title}</h4>
                    <div className="content">
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </Col>
    )
}