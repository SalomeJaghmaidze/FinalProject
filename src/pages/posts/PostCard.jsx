import React from "react";
import {
  Card,
  CardInfo,
  CardDetails,
  CardTitle,
  CardDescription,
  CardImgSpace,
  Image,
  CardView,
  CardButton,
} from "./PostStyles";

const PostCard = (props) => {
  return (
    <>
      <Card key={props.data.id}>
        <CardInfo>
          <CardDetails>
            <CardTitle>{props.data.title}</CardTitle>
            <CardDescription>{props.data.description}</CardDescription>
          </CardDetails>
          <CardImgSpace>
            <Image src={props.data.image}></Image>
          </CardImgSpace>
        </CardInfo>

        <CardView>
          <CardButton onClick={() => props.handlerPopup(props.data)}>
            View Post
          </CardButton>
        </CardView>
      </Card>
    </>
  );
};

export default PostCard;
