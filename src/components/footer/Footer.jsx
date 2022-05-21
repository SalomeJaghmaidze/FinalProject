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
    Item,
    Link
} from './FooterElements'

const Footer =()=> {
    return (
            <Container>
                <Row>
                    <Col>
                        <Header>Company</Header>
                            <List>
                                <Item><Link href="#">Posts</Link></Item>
                                <Item><Link href="#">Services</Link></Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Contact info </Header>
                            <List>
                                <Item><Link href="#">Email us</Link></Item>
                                <Item><Link href="#">FAQ</Link></Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Career </Header>
                            <List>
                                <Item><Link href="#">Vacancy</Link></Item>
                            </List>
                    </Col>

                    <Col>
                        <Header> Follow us</Header>
                            <List>
                                <Item><Link href="#"><FaTwitter></FaTwitter></Link></Item>
                                <Item><Link href="#"><FaLinkedin></FaLinkedin></Link></Item>
                                <Item><Link href="#"><FaFacebook></FaFacebook></Link></Item>
                            </List>
                    </Col>
                </Row>
            </Container>
    )
}

export default Footer;