import React, { Component } from "react";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlePageChange() {
    window.location =
      "https://drive.google.com/file/d/1AaDOZIW2p-PVlhmQRvLVAx-tOVhnp-di/view?usp=sharing";
  }
  render() {
    return (
      <div className="verticalCenter mainHeight">
        <Container className="mainContainer">
          <div className="navWrapper">
            <Navbar collapseOnSelect expand="sm" variant="light">
              <Navbar.Brand href="#home">favian hazman</Navbar.Brand>
              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
              <Nav className="mr-auto">
                {/* <Nav.Link href="#Me">Me</Nav.Link>
                  <Nav.Link href="#Professional">Professional</Nav.Link>
                  <Nav.Link href="#Blog">Blog</Nav.Link> */}
              </Nav>
              <Nav>
                <Button className="primaryBtn" onClick={this.handlePageChange}>
                  Resume
                </Button>
              </Nav>
              {/* </Navbar.Collapse> */}
            </Navbar>
          </div>
          <Container className=" verticalCenter content">
            <div>{this.props.content}</div>
          </Container>
        </Container>
      </div>
    );
  }
}

export default DefaultLayout;
