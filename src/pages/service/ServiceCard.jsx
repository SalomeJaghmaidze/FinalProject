import {
  Card,
  CardInfo,
  CardTitle,
  CardDescription,
  CardImgSpace,
  Image,
} from "./Styles";

export const ServiceCard = (props) => {
  return (
    <Card key={props.key}>
      <CardInfo>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardInfo>
      <CardImgSpace>
        <Image src={props.image}></Image>
      </CardImgSpace>
    </Card>
  );
};
