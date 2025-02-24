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

const ApiKey: React.FC = () => {
  // Filter to get only the "API Key" section
  const productSection = apiDataTyped.sections.find(
    (section) => section.sectionTitle === 'API Key'
  );

  if (!productSection) return null; // In case there's no "API Key" section

  return <OverviewTemplate sections={[productSection]} />;
};

export default ApiKey;
