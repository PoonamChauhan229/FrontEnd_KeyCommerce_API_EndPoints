import React from 'react';
import OverviewTemplate from '../StructuredTemplates/OverviewTemplate';
import apiData from '../../utilis/apiData'; // Import data from apiData.ts

const User: React.FC = () => {
  // Filter to get only the "User" section
  const userSection = apiData.sections.find(section => section.sectionTitle === "User");

  if (!userSection) return null; // In case there's no Products section

  return <OverviewTemplate sections={[userSection]} />;
};

export default User;
