import React from "react";
import { useState } from "react";
import PostCard from "../posts/Post";
import {
    Container,
    Card,
    CardInfo,
    CardTitle,
    CardDescription,
    CardImgSpace,
    Image,
    Cardview
} from './PostElements'

const AllPosts =()=>{

    const [posts, setPosts] = useState([])
    
    fetch('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR1KfX7T1zIiLSiuBBL4Yf_qNqPD23IecvFCMHoz8VyLEQT32irb9B6-RHo')
        .then(response => response.json())
        .then(data => setPosts(data));
    
    return (
        <Container>
      {
        posts.map((PostCard)=>{
            return(
                <Card key={PostCard.id}>
                    <CardInfo>
                       <CardTitle>{PostCard.title}</CardTitle>
                       <CardDescription>{PostCard.description}</CardDescription>
                    </CardInfo>
                     <CardImgSpace>
                       <Image src={PostCard.image}></Image>
                       <Cardview>View Post</Cardview>
                     </CardImgSpace>
                </Card>
            )
        })
      }
    </Container>
    )
}

export default AllPosts