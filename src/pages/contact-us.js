import React from "react"
import {Container, Row, Col, Nav, Form, FormGroup} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactBannerImg from "../components/contact/contact-banner";
import MapImg from "../components/contact/map-img";
import Marketing from "../components/marketing-cta";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <div className="bg-pink-half mb-5 pt-5">
        <Container>
            <Row className="mb-4">
                <Col className="text-center">
                    <p className="txt-yellow mb-0">
                        strategy. creativity. technology. analytics.
                    </p>
                    <h1 className="txt-white mb-0">
                        We should talk.
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
                  <form name="contact" method="POST" data-netlify="true">
                     <Row>
                         <Col sm={12} md={12} lg={6}>
                             <div className="form-group">
                                 <label>Full Name: </label>
                                 <input type="text" name="name" className="form-control" />
                             </div>
                         </Col>
                         <Col sm={12} md={12} lg={6}>
                             <div className="form-group">
                                 <label>Company: </label>
                                 <input type="text" name="name" className="form-control" />
                             </div>
                         </Col>
                     </Row>
                      <Row>
                          <Col sm={12} md={12} lg={6}>
                              <div className="form-group">
                                  <label>Your Email:</label>
                                  <input type="email" name="email" className="form-control" />
                              </div>
                          </Col>
                          <Col sm={12} md={12} lg={6}>
                              <div className="form-group">
                                  <label>Phone: </label>
                                  <input type="text" name="name" className="form-control" />
                              </div>
                          </Col>
                      </Row>

                      <Row>
                          <Col>
                              <div className="form-group">
                                  <label htmlFor="exampleFormControlSelect2">How can we help you?</label>
                                  <select multiple className="form-control" id="exampleFormControlSelect2">
                                      <option>Brand Identity 7 Strategy</option>
                                      <option>UI/UX Design</option>
                                      <option>Responsive Web Design</option>
                                      <option>Web Development</option>
                                      <option>WordPress Development</option>
                                      <option>Mobile Development</option>
                                      <option>Analytics & Conversation Tracking</option>
                                      <option>Email Marketing</option>
                                      <option>PPC Marketing</option>
                                      <option>Search Engine Optimization</option>
                                      <option>Social Media Marketing</option>
                                      <option>Other</option>
                                  </select>
                              </div>
                          </Col>
                      </Row>

                     <Row>
                         <Col sm={12} md={12} lg={12}>
                             <div className="form-group">
                                 <label>Comment or Questions:</label>
                                 <textarea name="message" className="form-control"></textarea>
                             </div>
                         </Col>
                     </Row>
                      <Row>
                          <Col>
                              <button type="submit" className="btn btn-yellow btn-lg">Send</button>
                          </Col>
                      </Row>
                  </form>
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