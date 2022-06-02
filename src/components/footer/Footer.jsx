import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Container, Row, Col, Header, List, Item, Link } from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header>Company</Header>
          <List>
            <Item>
              <Link to="/Posts">Posts</Link>
            </Item>
            <Item>
              <Link to="/Services">Services</Link>
            </Item>
          </List>
        </Col>

        <Col>
          <Header> Contact info </Header>
          <List>
            <Item>
              <Link to="#">Email us</Link>
            </Item>
            <Item>
              <Link to="#">FAQ</Link>
            </Item>
          </List>
        </Col>

        <Col>
          <Header> Career </Header>
          <List>
            <Item>
              <Link to="#">Vacancy</Link>
            </Item>
          </List>
        </Col>

        <Col>
          <Header> Follow us</Header>
          <List>
            <Item>
              <Link to="#">
                <FaTwitter></FaTwitter>
              </Link>
            </Item>
            <Item>
              <Link to="#">
                <FaLinkedin></FaLinkedin>
              </Link>
            </Item>
            <Item>
              <Link to="#">
                <FaFacebook></FaFacebook>
              </Link>
            </Item>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
