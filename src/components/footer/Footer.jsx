import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Header,
  List,
  Item,
  Link,
  Content,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <div><img src="/imgs/companyLogo.png" alt="image" /></div>
      <Content>
        <Row>
          <Col>
            <Header>Company</Header>
            <List>
              <Item>
                <Link to="/">Posts</Link>
              </Item>
              <Item>
                <Link to="/Services">Services</Link>
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
        <div><p>Copyright &copy; Salome Jaghmaidze</p></div>
      </Content>
    </Container>
  );
};

export default Footer;
