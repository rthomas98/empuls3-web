import React from "react"
import {Container, Row, Col, Nav, Form, Button} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactBannerImg from "../components/contact/contact-banner";
import MapImg from "../components/contact/map-img";
import Marketing from "../components/marketing-cta";

const ContactPage = () => (
  <Layout>
    <SEO title="Need marketing help?" />

    <div className="bg-pink-half mb-5 pt-5">
        <Container>
            <Row className="mb-5">
                <Col className="text-center">
                    <p className="txt-yellow mb-0">
                        strategy. creativity. technology. analytics.
                    </p>
                    <h1 className="txt-white mb-2">
                        Ready to grow your business? 972-798-8914
                    </h1>
                    <p className="txt-white mb-0">
                        For brand consulting services or new business inquiries, please email us at info@empuls3.com. <br/>Or just fill out the handy form and we’ll get back to you the same day unless we’re super busy.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactBannerImg/>
                </Col>
            </Row>
        </Container>
    </div>

      <Container>
          <Row>
              <Col>
                  <Form action="https://formspree.io/xwkldwao" method="POST">
                      <Row>
                          <Col sm={12} md={12} lg={6}>
                              <Form.Group controlId="name">
                                  <Form.Label>Your Name</Form.Label>
                                  <Form.Control name="name" type="text" placeholder="Enter your full name" required />
                              </Form.Group>
                          </Col>
                          <Col sm={12} md={12} lg={6}>
                              <Form.Group controlId="company">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control name="phone" type="text" placeholder="What's your phone number?" required />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col sm={12} md={12} lg={6}>
                              <Form.Group controlId="company">
                                  <Form.Label>Company</Form.Label>
                                  <Form.Control name="company" type="text" placeholder="What's the name of your company?"  />
                              </Form.Group>
                          </Col>
                          <Col sm={12} md={12} lg={6}>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control name="_replyto" type="email" placeholder="Enter email" required />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                  <Form.Label>I'm interested in ...</Form.Label>
                                  <Form.Control name="interested" as="select">
                                      <option>Becoming a client</option>
                                      <option>Discussing and RFP</option>
                                      <option>Becoming a partner</option>
                                      <option>Working at Empuls3</option>
                                      <option>Something else ...</option>
                                  </Form.Control>
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                  <Form.Label>Questions or Comments</Form.Label>
                                  <Form.Control name="comments" as="textarea" rows="3" placeholder="How can we help you?" />
                              </Form.Group>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="text-center">
                              <Button className="btn btn-yellow btn-lg border-0" value="send" type="submit">
                                  Submit
                              </Button>
                          </Col>
                      </Row>
                  </Form>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row>
              <Col>

              </Col>
          </Row>
      </Container>
      <Container fluid={true} className="mb-5">
          <Row>
              <Col>
               <div className="txt-overlay">
                   <MapImg/>
                   <div className="centered col p-5">
                        <Row>
                            <Col sm={12} md={12} lg={6} className="bg-white p-5">
                                <h2>
                                    Find Us
                                </h2>
                                <p>
                                    <strong>Phone:</strong> 972.798.8914
                                </p>
                                <p>
                                    <strong>Email:</strong> info@empuls3.com
                                </p>
                                <p>
                                    <strong>Address:</strong> 9100 Independence
                                    Pkwy, Plano, TX 75025
                                </p>

                                <h3>
                                    We Are social
                                </h3>
                                <Nav className="">
                                    <Nav.Item>
                                        <Nav.Link href="https://www.facebook.com/empuls3/" target="_blank" className="pl-0">facebook</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="https://twitter.com/empuls3" target="_blank" eventKey="link-1">twitter</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="https://www.linkedin.com/company/28631371/admin/" target="_blank" eventKey="link-2">linkedin</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="https://www.instagram.com/empuls3/?hl=en" target="_blank" eventKey="link-2">instagram</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="https://dribbble.com/empuls3" target="_blank" eventKey="link-2">Dribbble</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                   </div>
               </div>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row>
              <Col>
                  <h2>Frequently Asked Questions</h2>
                  <h3 className="txt-pink">
                      I don’t have a website, but I’d like one. Can you help?
                  </h3>
                  <p className="text-muted">
                      Yes! We help companies build websites, from start to finish.
                  </p>

                  <h3 className="txt-pink">
                      How much should I budget for a new website?
                  </h3>
                  <p className="text-muted">
                      Pricing varies by project and can range from $1,500 to $75,000. Some websites are very simple, while others include more complicated features like e-commerce and tech integrations. Schedule a call with the Empuls3 team for a custom quote.
                  </p>

                  <h3 className="txt-pink">
                      What results can I expect from a digital marketing campaign?
                  </h3>
                  <p className="text-muted">
                      Our digital growth team will work with you to set realistic goals for each month, quarter, and year. We offer monthly reporting and we adjust our tactics regularly to help you meet your ROI goals. In general, Empuls3 clients see a 40 percent increase in traffic and a 25 percent increase in leads in the first year that we work together.
                  </p>

                  <h3 className="txt-pink">
                      Are you an SEO firm?
                  </h3>
                  <p className="text-muted">
                      We’re a full-service web design and digital marketing agency. One of our key competencies is SEO. Therefore, every website we build is optimized to help you rank higher on Google, and our ongoing digital growth services are focused on continually improving SEO and ultimately lead generation.
                  </p>
              </Col>
          </Row>
      </Container>

      <Marketing/>

  </Layout>
)

export default ContactPage