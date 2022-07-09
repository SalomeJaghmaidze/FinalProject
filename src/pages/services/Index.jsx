import React from "react";
import { useState, useEffect } from "react";
import FormModal from "./FormModal";
import { ServiceCard } from "./ServiceCard";
import Servicelist from "./ServiceList.json";
import "./Form.css";
import { Container, Content } from "./MainStyles";

const Services = () => {
  const [services, setService] = useState(Servicelist);

  const addService = (item) => {
    setService(() => {
      return [...services, item];
    });
  };
  return (
    <>
    <Container>
      <FormModal services={addService}></FormModal>
      <Content>
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            ></ServiceCard>
          );
        })}
      </Content>
      </Container>
    </>
  );
};

export default Services;
