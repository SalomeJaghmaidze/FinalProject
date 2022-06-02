import React from "react";
import { useEffect, useState } from "react";
import {
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

const PostModal = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
  
    const closeModal = () => {
    setModal(!modal);
  };
  return (
    <div>
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
    </div>
  );
};

export default PostModal;
