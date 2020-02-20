import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Development from "../components/development-cta";
import EventsImg from "../components/work/events-img";
import {Link} from "gatsby";
import ThomasImg from "../components/work/htl-img";
import SnappeningImg from "../components/work/snappening-img";
import CodegigImg from "../components/work/codegig";
import WorkBanner from "../components/work/work-banner";

const WorkPage = () => (
  <Layout>
    <SEO title="Digital Marketing Case Studies" />

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="p-0">
                  <WorkBanner/>
              </Col>
              <Col sm={12} md={12} lg={6} className=" d-flex justify-content-center bg-pink p-5">
                  <div className="my-auto col">
                      <p className="lead m-0 txt-yellow">
                          strategy. creativity. technology. analytics.
                      </p>
                      <h1 className="txt-white mb-0">
                          The fruits of our labor.
                      </h1>
                      <p className="txt-white mb-0 lead">
                          Complete brand overhauls. Tactical marketing strikes. Traditional, digital, UX, social and experiential, it’s all here. And it all worked. Have a look.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col lg={12} className="text-center">
                  <h2>Recent Case Studies</h2>
                  <p className="lead">
                      Check out the case studies below to discover how we drive results with brilliant strategy and inspiring creative.
                  </p>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={6} md={12} lg={4} className="text-center mb-md-5">
                  <EventsImg/>
                  <h4>Events 4 You</h4>
                  <p className="text-muted">
                      At Events4You we love parties of all kinds. We are dedicated to making your vision a reality, creating an unforgettable event. Each event is carefully crafted to your needs. We specialize …
                  </p>
                  <Link to="https://www.theevents4you.com/" target="_blank" className="btn btn-pink">view more</Link>
              </Col>
              <Col sm={6} md={12} lg={4} className="text-center mb-md-5">
                  <ThomasImg/>
                  <h4>Hebert-Thomas Law</h4>
                  <p className="text-muted">
                      If you require the services of a business lawyer in Texas, Hebert-Thomas Law, PLLC focuses almost exclusively in corporate law and therefore has the experience to solve any legal…
                  </p>
                  <Link to="https://www.hebertthomaslaw.com/" target="_blank" className="btn btn-pink">view more</Link>
              </Col>
              <Col sm={6} md={12} lg={4} className="text-center mb-md-5">
                  <SnappeningImg/>
                  <h4>Snappening</h4>
                  <p className="text-muted">
                      Snappening is the most comprehensive online service for planning your own event. After countless hours of research with consumers, professional planners …
                  </p>
                  <Link to="https://snappening.com/" target="_blank" className="btn btn-pink">view more</Link>
              </Col>
          </Row>

          <Row className="">
              <Col sm={6} md={12} lg={4} className="text-center">
                  <CodegigImg/>
                  <h4>Codegig</h4>
                  <p className="text-muted">
                      Codegig’s accelerated career training programs are designed for busy adults, some who may continue to work full or part-time jobs while training, often while raising families!
                  </p>
                  <Link to="https://www.codegig.co/" target="_blank" className="btn btn-pink">view more</Link>
              </Col>
          </Row>
      </Container>

      <Development/>
  </Layout>
)

export default WorkPage