
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "gatsby";
import EventsImg from "./work/events-img";
import ThomasImg from "./work/htl-img";
import SnappeningImg from "./work/snappening-img";

const RecentWorks = () => (
    <Container className="mb-5">
        <Row className="mb-4">
            <Col lg={12} className="text-center">
                <h2>Recent Case Studies</h2>
                <p className="lead">
                    Check out the case studies below to discover how we drive results with brilliant strategy and inspiring creative.
                </p>
            </Col>
        </Row>
        <Row className="">
            <Col sm={6} md={12} lg={4} className="text-center">
                <EventsImg/>
                <h4>Events 4 You</h4>
                <p className="text-muted">
                    At Events4You we love parties of all kinds. We are dedicated to making your vision a reality, creating an unforgettable event. Each event is carefully crafted to your needs. We specialize …
                </p>
                <Link to="https://www.theevents4you.com/" target="_blank" className="btn btn-pink">view more</Link>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <ThomasImg/>
                <h4>Hebert-Thomas Law</h4>
                <p className="text-muted">
                    If you require the services of a business lawyer in Texas, Hebert-Thomas Law, PLLC focuses almost exclusively in corporate law and therefore has the experience to solve any legal…
                </p>
                <Link to="https://www.hebertthomaslaw.com/" target="_blank" className="btn btn-pink">view more</Link>
            </Col>
            <Col sm={6} md={12} lg={4} className="text-center">
                <SnappeningImg/>
                <h4>Snappening</h4>
                <p className="text-muted">
                    Snappening is the most comprehensive online service for planning your own event. After countless hours of research with consumers, professional planners …
                </p>
                <Link to="https://snappening.com/" target="_blank" className="btn btn-pink">view more</Link>
            </Col>
        </Row>
    </Container>
)

export default RecentWorks
