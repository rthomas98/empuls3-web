import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UiBannerImg from "../components/ui/ui-banner";
import UiImgOne from "../components/ui/ui-img-1";
import UiImgTwo from "../components/ui/ui-img-2";
import BrandImgTwo from "../components/brand/brand-img-2";
import UiImgThree from "../components/ui/ui-img-3";
import UiImgFour from "../components/ui/ui-img-4";
import Design from "../components/design-cta";

const UIPage = () => (
  <Layout>
    <SEO title="UI/UX Design Services in Frisco Texas" />

    <div className="bg-pink-half mb-5 mt-3">
        <Container>
            <Row>
                <Col sm={12} md={12} lg={6} className="d-flex justify-content-center mt-md-5">
                    <div className="my-auto col">
                        <p className="lead m-0 txt-yellow">
                            strategy. creativity. technology. analytics.
                        </p>
                        <h1 className="m-0 txt-white">UI/UX DESIGN</h1>
                        <p className="txt-white">
                            We focus on delivering high quality user experience design
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6} className="pt-5 mb">
                    <UiBannerImg/>
                </Col>
            </Row>
        </Container>
    </div>

      <Container className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center p-md-0 mb-md-5">
                 <div className="my-auto col">
                     <UiImgOne/>
                 </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center">
                  <div className="my-auto col">
                    <h2>What We Deliver</h2>
                      <p className="lead">
                          Websites that tell your brand’s story
                      </p>
                      <p>
                          We don’t just design with your users in mind. We design with your users involved. Skip the overspend on unwanted features and focus on delighting the people who matter most. We empower people to experience the designs we’ve envisioned — and they let us know when we’re onto something.
                      </p>
                      <p>
                          What keeps people from falling in love with your business? Let’s make it effortless. We combine data-driven insight and creativity to remove friction, address anxiety, and build user confidence. The more enjoyable their experience, the easier it becomes to reach your business goals.
                      </p>
                  </div>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5 p-0">
          <Row>
              <Col sm={12} md={12} lg={6} className="bg-purple p-5 d-flex justify-content-center">
                  <div className="my-auto col">
                      <h2 className="txt-yellow">Information & System Architecture</h2>
                      <p>
                          Creating an optimal user experience is fundamentally rooted in the efficient exchange of information. During this phase, we identify the data structure that facilitates the most streamlined flow of information between your users and the platform. Developing this architecture shapes the remainder of the UX design process, providing a foundation of efficiency for the path forward.
                      </p>
                      <h2 className="txt-yellow">
                          Interaction Design
                      </h2>
                      <p>
                          The very essence of UX design lies in the interaction between users, software, and sometimes even hardware. Utilizing the analytics and intelligence data gathered during the research phase, our UX team designs an interaction tailored to your customers, ensuring the finished solution is a seamless, intuitive experience that caters to all user types.
                      </p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="m-0 p-0">
                  <UiImgTwo/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-4">
              <Col sm={6} md={12} lg={6} className="d-flex justify-content-center bg-yellow p-3 p-md-5 mb-md-5 p-md-0 mb-lg-0">
                  <div className="my-auto col">
                      <h2>Wireframing and Prototyping
                      </h2>
                      <p>
                          Equipped with a wealth of user data from the Discovery phase, our UX designers transform the journey maps into more detailed sitemaps and interactive wireframes. These prototypes form the skeleton of your website or application and range from low-fidelity mockups to highly authentic frameworks. Empuls3 builds all our wireframes with best-in-class design software like Adobe XD or Sketch and uses Invision App for our more actualized prototypes.
                      </p>

                  </div>
              </Col>
              <Col sm={6} md={12} lg={6}>
                  <UiImgThree/>
              </Col>
          </Row>

          <Row className="mb-4">
              <Col lg={12} className="">
                     <UiImgFour/>
                  <h2 className="mt-3">
                      User Testing
                  </h2>
                  <p>
                      We don’t just design with your users in mind. We design with your users involved. Skip the overspend on unwanted features and focus on delighting the people who matter most. We empower people to experience the designs we’ve envisioned — and they let us know when we’re onto something.
                  </p>
                  <h2>
                      Visual Design
                  </h2>
                  <p>
                      A project’s visual design details the interface components that define the user experience. Our UI team goes beyond simply perfecting the visual layout of a project’s design elements—we consider the impact that typography, color theory, and accessibility requirements might have on a user’s overall experience, and make adjustments accordingly. The result is a pixel-perfect, aesthetically pleasing UI—an essential piece of any desirable user experience.
                  </p>
              </Col>
          </Row>

          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>This isn’t our first rodeo. Trust us.</h2>
                  <p className="lead">
                      We have over 10 years of experience partnering with organizations who make bold moves and tough decisions
                      in the interest of advancing their mission. It isn’t always easy, but it’s always worth it.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Design/>

  </Layout>
)

export default UIPage