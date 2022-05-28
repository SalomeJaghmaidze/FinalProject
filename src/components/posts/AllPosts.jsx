import React from "react";
import { useEffect, useState } from "react";
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
    
    useEffect(()=>{
    fetch('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR1ghPZYf9Jz13-DNSFMx3u9NSvg755XlHUd9ls8WtpVsq3KbY2NmxP-sKA')
        .then(response => response.json())
        .then(data => setPosts(data));
      },[])

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