import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div className="property-details">
      <h1>{property.type}</h1>
      <div className="gallery">
        {property.images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Property Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Location</Tab>
        </TabList>
        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>
        <TabPanel>
          <img src={property.floorPlan} alt="Floor Plan" className="floor-plan-image" />
        </TabPanel>
        <TabPanel>
          <iframe
            src={`https://www.google.com/maps?q=${property.postcode}&output=embed`}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            style={{ border: "none" }}
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PropertyDetailsPage;
