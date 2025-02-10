import React from 'react';
import OverviewTemplate from '../StructuredTemplates/OverviewTemplate';
import apiData from '../../utilis/apiData.json'; // Import data from apiData.json

// Define the structure of a section
interface Endpoint {
  title: string;
  description: string;
  method: string;
  url: string;
  apiKeyRequired?: boolean;
  borderColor: string;
  methodColor?: string;
}
interface Section {
  sectionTitle: string;
  sectionDescription: string;
  endpoints: Endpoint[];
}


// Define the structure of apiData
interface ApiData {
  sections: Section[];
}

// Type the imported apiData as ApiData
const apiDataTyped = apiData as ApiData;

const ApiKey: React.FC = () => {
  // Filter to get only the "API Key" section
  const productSection = apiDataTyped.sections.find(
    (section) => section.sectionTitle === 'API Key'
  );

  if (!productSection) return null; // In case there's no "API Key" section

  return <OverviewTemplate sections={[productSection]} />;
};

export default ApiKey;
