
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "gatsby";
import DesignIcon from "./icons/design-icon";
import ResponsiveIcon from "./icons/resposive-icon";
import BrandIcon from "./icons/brand-icon";

const Design = () => (
    <Container className="mb-5">
        <Row className="mb-4">
            <Col lg={12} className="text-center">
                <h3>A UX design company that innovates</h3>
                <p className="lead">
                    We’re a full-service UX design agency.<br/>
                    We build digital products and brands for companies of any size.
                </p>
            </Col>
        </Row>
        <Row className="">
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <DesignIcon/>
                        <h4>UI/UX Design</h4>
                        <p className="text-muted">We work closely with our clients to define, design, and build user experiences across all
                            platforms and brand touch points.</p>
                        <Link to="ui-ux-design" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <ResponsiveIcon/>
                        <h4>Responsive Web Design</h4>
                        <p className="text-muted">We create user-friendly responsive content layout. Site will show on different devices by
                            adapting proper codes.</p>
                        <Link to="responsive-web-design" className="btn btn-pink">view more</Link>

                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <BrandIcon/>
                        <h4>Brand Identity and Strategy</h4>
                        <p className="text-muted">Brand development is your company’s reputation and your visibility in the marketplace. Your brand
                            is your identity.</p>

                        <Link to="brand-identity-and-strategy" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Design
