import React from "react";
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {
    Container,
    Row,
    Col,
    Header,
    List,
    Item
} from './FooterElements'

const Footer =()=> {
    return (
            <Container>
                <Row>
                    <Col>
                        <Header>Company</Header>
                            <List>
                                <Item> Blog </Item>
                                <Item> Services </Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Contact info </Header>
                            <List>
                                <Item> Email us </Item>
                                <Item> FAQ </Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Career </Header>
                            <List>
                                <Item> Vacancy </Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Follow us</Header>
                            <List>
                                <Item><FaTwitter></FaTwitter></Item>
                                <Item><FaLinkedin></FaLinkedin></Item>
                                <Item><FaFacebook></FaFacebook></Item>
                            </List>
                    </Col>
                </Row>
            </Container>
    )
}

export default Footer;