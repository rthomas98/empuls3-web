import { Navbar, Nav, NavDropdown, Container   } from "react-bootstrap"
import React from "react"

const Header = () => (
  <header>
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/agency">Agency</Nav.Link>
          <NavDropdown title="Design and Development" id="basic-nav-dropdown">
            <NavDropdown.Item href="/brand-identity-and-strategy">Brand Identity and Strategy</NavDropdown.Item>
            <NavDropdown.Item href="/ui-ux-design">UI/UX Design</NavDropdown.Item>
            <NavDropdown.Item href="/responsive-web-design">Responsive Web Design</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/web-development">Web Development</NavDropdown.Item>
            <NavDropdown.Item href="/wordpress-development">Wordpress Development</NavDropdown.Item>
            <NavDropdown.Item href="/mobile-development">Mobile Development</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Marketing Stratigies" id="basic-nav-dropdown">
            <NavDropdown.Item href="/marketing-overview">Marketing Overview</NavDropdown.Item>
            <NavDropdown.Item href="/ui-ux-design">Analytics and Conversion Tracking</NavDropdown.Item>
            <NavDropdown.Item href="/email-marketing">Email Marketing</NavDropdown.Item>
            <NavDropdown.Item href="/ppc-management">Pay-Per-Click Management</NavDropdown.Item>
            <NavDropdown.Item href="/search-engine-optimization">Search Engine Optimization (SEO)</NavDropdown.Item>
            <NavDropdown.Item href="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/our-work">Our Work</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header
