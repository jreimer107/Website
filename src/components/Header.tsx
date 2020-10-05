import * as React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <NavbarBrand href="/">John Reimer</NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="/FirstComponent">
            <Nav.Item>Page 1</Nav.Item>
          </Nav.Link>
          <Nav.Link href="/SecondComponent">
            <NavItem>Page 2</NavItem>
          </Nav.Link>
        </Nav> */}
        <Nav>
          <Nav.Link
            href="https://docs.google.com/document/d/1-kau5VNCFUlClz2UGk3DjRtN5YQ5PT_VXYT92COMe1A/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Nav.Item>Resume</Nav.Item>
          </Nav.Link>
          <Nav.Link href="/FirstComponent">
            <Nav.Item>Recordings</Nav.Item>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
