import React from 'react';
import { ServiceCard } from "./ServiceCard";
import Servicelist from './ServiceMockups.json'
import {
    Container,
    Card,
    CardInfo,
    CardTitle,
    CardDescription,
    CardImgSpace,
    Image
} from './AddServiceStyles'

const AddService =()=> {
  
  return (
      <Container>
      {
        Servicelist.map(service=>{
            return(
                <Card key={service.id}>
                    <CardInfo>
                       <CardTitle>{service.title}</CardTitle>
                       <CardDescription>{service.description}</CardDescription>
                    </CardInfo>
                     <CardImgSpace>
                       <Image src={service.image}></Image>
                     </CardImgSpace>
                </Card>
            )
        })
      }
    </Container>
  )
    }
export default AddService