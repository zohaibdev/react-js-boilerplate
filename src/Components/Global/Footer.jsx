import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import { Link } from 'react-router-dom';


export default function Footer() {
    const img_url = (img) => require('../../assets/images/' + img)

    const FooterBlock = props => {
        let fttitle;

        if (props.title != null) {
            fttitle = <div className='ft-title'><h4>{props.title}</h4></div>
        }

        if (props.children != null) {
            return (
                <Col md={props.md} sm={props.sm}>
                    <div className="ft-block">
                        {fttitle}
                        <div className="ft-links">
                            <ul>
                                {props.children}
                            </ul>
                        </div>
                    </div>
                </Col>
            )
        }
    }
    return (
        <footer>
            <div className="main-footer">
                <Container>
                    <Row className='gx-5'>
                        <Col xl={4} lg={4}>
                            <div className="ft-about ft-block">
                                <Logo />
                                <div className="ft-content mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <div className="ft-social">
                                    <p>Follow us on</p>
                                    <ul>
                                        <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                        <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link></li>
                                        <li><Link to="#" target="_blank"><FontAwesomeIcon icon={faFacebookMessenger} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <FooterBlock xl={2} lg={3} title="Learn">
                            <li><Link to="#">Get Started</Link></li>
                            <li><Link to="#">Manual</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Events</Link></li>
                        </FooterBlock>
                        <FooterBlock xl={2} lg={3} title="Explore">
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Grants</Link></li>
                            <li><Link to="#">GitHub</Link></li>
                            <li><Link to="#">Airlock APIs</Link></li>
                        </FooterBlock>
                        <FooterBlock xl={2} lg={3} title="Participate">
                            <li><Link to="#">Urbit Binaries</Link></li>
                            <li><Link to="#">Urbit Client</Link></li>
                            <li><Link to="#">Issue Tracker</Link></li>
                            <li><Link to="#">Whitepaper</Link></li>
                        </FooterBlock>
                        <FooterBlock xl={2} lg={3} title="Policy">
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Service</Link></li>
                            <li><Link to="mailto:support@urbit.org">support@email.com</Link></li>
                        </FooterBlock>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col sm={7}>
                            <address>2022 Copyright © All Rights Reserved.</address>
                        </Col>
                        <Col sm={5}>
                            <div className="payment">
                                <img src={img_url('payment.jpg')} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}