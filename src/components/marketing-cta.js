
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "gatsby";
import AirPlane from "./icons/plane";
import AnalysisIcon from "./icons/analysis-icon";
import EmailIcon from "./icons/email-icon";
import AdIcon from "./icons/ad-icon";
import BrowserIcon from "./icons/browser-icon";
import UsersIcon from "./icons/user-icons";

const Marketing = () => (
    <Container className="mb-5">
        <Row className="mb-4">
            <Col lg={12} className="text-center">
                <h3>Intelligence Marketing</h3>
                <p className="lead">
                    We develop and implement thorough marketing strategies
                    based on the relevant and valuable market researches.
                </p>
            </Col>
        </Row>
        <Row className="">
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                       <AirPlane/>
                        <h4>Marketing Overview</h4>
                        <p className="text-muted">
                            With our expertise in the digital marketing landscape, we enable brands to do what they do best, and strategically deliver their story and services at scale.
                        </p>
                        <Link to="web-development" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <AnalysisIcon/>
                        <h4>Analysis & Research</h4>
                        <p className="text-muted">
                            Brand's birth & growth. That is the most valuable collection of our services because of the strong help in the creation or development brand's products.
                        </p>
                        <Link to="wordpress-development" className="btn btn-pink">view more</Link>

                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <EmailIcon/>
                        <h4>Email Marketing</h4>
                        <p className="text-muted">
                            An innovative email marketing strategy allows you to target multiple client segments with personalized messaging for optimal prospect engagement.
                        </p>

                        <Link to="brand-identity-and-strategy" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="">
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <AdIcon/>
                        <h4>Pay-Per-Click Managements</h4>
                        <p className="text-muted">
                            To get the most out of your campaigns, we create a consistent and compelling message that combines the right keywords, to produce sales.
                        </p>
                        <Link to="web-development" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <BrowserIcon/>
                        <h4>SEO Services</h4>
                        <p className="text-muted">
                            Empuls3 enables you to provide a valuable and in-demand search engine optimization solutions to your clients at very little cost to you.
                        </p>
                        <Link to="wordpress-development" className="btn btn-pink">view more</Link>

                    </div>
                </div>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <div className="single-service d-flex justify-content-center">
                    <div className="my-auto col">
                        <UsersIcon/>
                        <h4>Social Media</h4>
                        <p className="text-muted">
                            Here at Empuls3 we believe that social media analytics are key to creating a solid strategy. Measuring new followers isn’t enough.
                        </p>

                        <Link to="brand-identity-and-strategy" className="btn btn-pink">view more</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Marketing
