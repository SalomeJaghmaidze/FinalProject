import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardInfo,
  CardDetails,
  CardTitle,
  CardDescription,
  CardImgSpace,
  Image,
  Cardview,
  CardButton,
  Modal,
  Overlay,
  Box,
  Content,
  Header,
  Heading,
  Close,
  Img,
  Description,
} from "./PostElements";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [newPost, setNewPost] = useState();

  useEffect(() => {
    fetch(
      "https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR1ghPZYf9Jz13-DNSFMx3u9NSvg755XlHUd9ls8WtpVsq3KbY2NmxP-sKA"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const HandlerPopup = (PostCard) => {
    setNewPost(PostCard);
    setModal(PostCard);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <Container>
      {posts.map((PostCard) => {
        return (
          <Card key={PostCard.id}>
            <CardInfo>
              <CardDetails>
                <CardTitle>{PostCard.title}</CardTitle>
                <CardDescription>{PostCard.description}</CardDescription>
              </CardDetails>
              <CardImgSpace>
                <Image src={PostCard.image}></Image>
              </CardImgSpace>
            </CardInfo>

            <Cardview>
              <CardButton onClick={() => HandlerPopup(PostCard)}>
                View Post
              </CardButton>
            </Cardview>
          </Card>
        );
      })}
      {modal && (
        <Modal>
          <Overlay>
            <Box>
              <Header>
                <Heading>{newPost.title}</Heading>
                <Close onClick={closeModal}>+</Close>
              </Header>
              <Content>
                <Img src={newPost.image}></Img>
                <Description>{newPost.description}</Description>
              </Content>
            </Box>
          </Overlay>
        </Modal>
      )}
    </Container>
  );
};

export default AllPosts;
