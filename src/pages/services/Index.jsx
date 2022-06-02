import React from "react";
import { useState, useEffect } from "react";
import FormModal from "./FormModal";
import { ServiceCard } from "./ServiceCard";
import Servicelist from "./ServiceList.json";
import "./Form.css";
import { Container } from "./MainStyles";

const Services = () => {
  const [services, setService] = useState(Servicelist);

  const addService = (item) => {
    setService(() => {
      return [...services, item];
    });
  };
  return (
    <>
      <FormModal services={addService}></FormModal>
      <Container>
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
      </Container>
    </>
  );
};

export default Services;
