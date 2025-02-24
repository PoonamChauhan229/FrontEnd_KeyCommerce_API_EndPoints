import React from 'react';
import OverviewTemplate from '../StructuredTemplates/OverviewTemplate';
import rawApiData from "../../utilis/apiData.json"; // Importing the JSON data

// Define the endpoint interface
interface Endpoint {
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  apiKeyRequired: boolean;
  borderColor: string;  
}

interface ApiData {
  sections: Section[];  
}

// Define the section interface
interface Section {
  sectionTitle: string;
  sectionDescription: string;
  endpoints: Endpoint[];
}

const apiDataTyped = rawApiData as unknown as ApiData;

const Cart: React.FC = () => {
  // Filter to get only the "Products" section
  const cartSection = apiDataTyped.sections.find(section => section.sectionTitle === "Cart");

  if (!cartSection) return null; // In case there's no Products section

  return <OverviewTemplate sections={[cartSection]} />;
};

export default Cart;
