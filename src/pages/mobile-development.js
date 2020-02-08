import React from "react"
import { Container, Row, Col, Media } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Development from "../components/development-cta";
import MobileBanner from "../components/mobile/mobile-banner";
import MobileBannerTwo from "../components/mobile/mobile-banner-2";
import MobileImgOne from "../components/mobile/mobile-img-1";
import {Link} from "gatsby";
import MobileImgTwo from "../components/mobile/mobile-img-2";
import MobileImgThree from "../components/mobile/mobile-img-3";

const MobilePage = () => (
  <Layout>
    <SEO title="Mobile" />

    <Container fluid={true} className="mb-5">
        <Row>
            <Col sm={12} md={12} lg={6} className="mb-md-5">
                <div className="txt-overlay">
                    <MobileBanner/>
                    <div className="bottom-left p-3 p-md-5">
                        <p className="txt-yellow mb-0">
                            strategy. creativity. technology. analytics.
                        </p>
                        <h1 className="txt-white mb-0">
                            MOBILE DEVELOPMENT
                        </h1>
                        <p className="txt-white mb-0">
                            Empuls3 specializes in the native and hybrid design and development for all devices including iPhone, iPad, Andriod, and more.
                        </p>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={12} lg={6} className="">
                <MobileBannerTwo/>
            </Col>
        </Row>
    </Container>

      <Container className="mb-5">
          <Row>
              <Col lg={12} className="text-center">
                  <h2>
                      Mobile Apps Development
                  </h2>
                  <p>
                      The best websites, mobile apps, and campaigns are often designed to delight customers, but your business needs to attract users in the first place. Empul3 combines strategic thinking and performance marketing to generate an integrated experience that exceeds your users’ expectations and your business goals.
                  </p>
              </Col>
          </Row>
      </Container>

      <Container fluid={true} className="mb-5">
          <Row>
              <Col sm={12} md={12} lg={6} className="p-5 bg-purple d-flex justify-content-center">
                      <div className="my-auto col">
                          <h2>
                              Android App Development
                          </h2>
                          <p className="lead txt-white">
                              Being one of the most widely supported mobile operating systems, Android grants access to a wide range of users, devices, and development capabilities.
                          </p>
                          <p>
                              As an Android app development company, we have very high standards of quality. How do we live up to such high standards? We offer comprehensive end-to-end services: our clients can watch their apps change from vague ideas to amazing, well-received completed products.
                          </p>
                          <p>
                              At Empuls3, we specialize in customizing, developing, designing, testing, and launching Android applications. Our experienced, problem-solving team can offer unique insights due to their years of experience and industry trust. We create custom Android apps to help you achieve your business goals and offer great user experiences, all while maintaining processes that are time-efficient and cost-effective for our clients.
                          </p>
                          <Link to="contact-us" className="btn btn-pink btn-lg">lets get started</Link>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                    <MobileImgOne/>
              </Col>
          </Row>
      </Container>

      <Container className="mb-5">
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="d-flex justify-content-center mb-md-5">
                  <div className="my-auto col">
                      <h2>
                          iOS App Development
                      </h2>
                      <p className="lead">
                          Explore the wide-ranging advantages that encourage worldwide clients to choose our iOS app development services.
                      </p>
                      <p>
                          The experiences that we have garnered in developing apps for iPhone for a vast range of industries and for a user base that belongs to all the different corners of the world, each known for their individual culture have resulted in an understanding that our team of iPhone app developers has now created. An understanding of what the users look for and what they should expect.
                      </p>
                      <p>
                          Empuls3’s iOS App Development Process includes covering of processes from ideation to post-launch maintenance for all – iPhone, Apple Watch, Apple TV, and iPad.
                      </p>

                      <p>
                          Irrespective of what platform the app has to be launched in, Empuls3’s team of iOS App Builders and Designers know all the technical requirements the different platforms come with, in-depth. The end result of every single of our iOS App is the same.
                      </p>

                      <Link to="contact-us" className="btn btn-pink btn-lg">are you ready to get started?</Link>

                  </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="p-0">
                    <MobileImgTwo/>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12}>
                  <div className="txt-overlay">
                      <MobileImgThree/>
                      <div className="centered text-center col p-5">
                          <h2 className="txt-white">
                              Cross-Platform App Development
                          </h2>
                          <p className="txt-white">
                              Ionic Framework | React Native | Flutter
                          </p>
                          <p className="lead txt-white">
                              The clear advantage of cross-platform mobile app development is that you’ll be able to deliver your concise message to everyone, rather than having several companies work on several types of apps (which often results in bugs, issues, and wildly differing user experiences).
                          </p>
                          <Link to="contact-us" className="btn btn-yellow btn-lg">talk to a mobile developer expert</Link>

                      </div>
                  </div>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12}>
                  <h2>
                      Expertise in Cross-platform App Development
                  </h2>
                  <p>
                      Cross-platform development is a smart choice for brands that want to be both recognizable and reckoned with, and those that want to provide consistent app experiences to everyone with a mobile device. The highly experienced Empuls3 team knows how to deal with the technical details of multi-platform app development. Using Ionic/React Native/Flutter world-class technologies, our developers can design and implement custom apps that feel native to each platform. We’ll turn code into something beautiful.
                  </p>
                  <p>
                      To start, our team can work with you to find out which platforms would be best suited for your mobile app. Cross-platform development will depend on several factors, including which devices your clients, customers, or employees most often use. Taking the time to conduct market research will lead to more successful outcomes; it’s one of the factors that set us apart as a cross-platform mobile app development company.
                  </p>
              </Col>
          </Row>
          <Row className="mb-3">
              <Col lg={12} className="text-center">
                  <h3>
                      Our Mobile App Development Process
                  </h3>
                  <p className="lead">
                      Explore the wide-ranging advantages that encourage worldwide clients to choose our iOS app development services.
                  </p>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media className="bg-purple rounded p-4 process-item">
                      <Media.Body>
                          <h5 className="txt-yellow">Research</h5>
                          <p>
                              Once the client reaches us with the app idea, we do an in-depth analysis on the basis of demographics, behavior patterns, and target audience to refine the idea into a solid basis for an application.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media>
                      <Media.Body className="bg-purple rounded p-4 process-item">
                          <h5 className="txt-yellow">Wireframing</h5>
                          <p>
                              Based on the client’s requirements, our experienced team of UI/UX designers will create the Wireframe of the visualized idea that clearly defines the user’s journey.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-4">
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media className="bg-purple rounded p-4 process-item">
                      <Media.Body>
                          <h5 className="txt-yellow">Prototyping</h5>
                          <p>
                              We make a set of prototypes for the app that serves as a quick source to view how the app works. We employ the industry’s best techniques to design prototypes and assure that things are going in the right direction.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media>
                      <Media.Body className="bg-purple rounded p-4 process-item">
                          <h5 className="txt-yellow">Design & Development</h5>
                          <p>
                              We follow the best development practices as per Human Interface Guidelines and start the development process. Our development capabilities provide a unique competitive advantage to your app.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media className="bg-purple rounded p-4 process-item">
                      <Media.Body>
                          <h5 className="txt-yellow">Testing and QA</h5>
                          <p>
                              Our qualified and experienced QA team works the Standard and automated mobile app testing & analysis. We assure quality more than anything. Get a bug-free, established and approved mobile app with us.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-4 mb-md-4 mb-lg-0">
                  <Media>
                      <Media.Body className="bg-purple rounded p-4 process-item">
                          <h5 className="txt-yellow">Deployment to Live Server</h5>
                          <p>
                              Once the developed app fulfills your expectations, we take your app to live as per your launch plan.
                          </p>
                      </Media.Body>
                  </Media>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col lg={12} className="text-center">
                  <h2>Choose Empuls3 for Mobile Application Development</h2>
                  <p className="lead">
                      Let’s innovate together. Whether you are a start-up, a business enterprise or Fortune 500 company, <br/>hire our expert App development team today, to digitalize your business.
                  </p>
                  <Link to="contact-us" className="btn btn-yellow btn-lg">get a free quote</Link>
              </Col>
          </Row>
      </Container>

      <Development/>

  </Layout>
)

export default MobilePage