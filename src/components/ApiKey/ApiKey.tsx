import React from 'react';
import OverviewTemplate from '../StructuredTemplates/OverviewTemplate';
import apiData from '../../utilis/apiData'; // Import data from apiData.ts

const ApiKey: React.FC = () => {
  // Filter to get only the "Products" section
  const productSection = apiData.sections.find(section => section.sectionTitle === "API Key");

  if (!productSection) return null; // In case there's no Products section

  return <OverviewTemplate sections={[productSection]} />;
};

export default ApiKey;
