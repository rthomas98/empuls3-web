
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "gatsby";

const Development = () => (
    <Container className="mb-5">
        <Row className="mb-4">
            <Col lg={12} className="text-center">
                <h3>Reach Users Across Platforms</h3>
                <p className="lead">
                    Custom web development offers options for businesses who seek to<br/>
                    provide a flexible, consistent experience for users across platforms.
                </p>
            </Col>
        </Row>
        <Row className="">
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <h4>Web Development</h4>
                        <p className="text-muted">
                            We leverage the latest technical tools and trends to create the highest standard of quality in web development services from concept to launch and way beyond.
                        </p>
                        <Link to="web-development" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <h4>WordPress Development</h4>
                        <p className="text-muted">
                            Our experts with incredible knowledge and years of skill guarantee that your business achieves unrivaled position and sets another level of accomplishment.
                        </p>
                        <Link to="wordpress-development" className="btn btn-pink">view more</Link>

                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <h4>Mobile Development</h4>
                        <p className="text-muted">
                            If you’re serious about getting apps to improve the way your business operates, or launching high-end and beautiful mobile apps for iOS and Android.
                        </p>

                        <Link to="brand-identity-and-strategy" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Development
