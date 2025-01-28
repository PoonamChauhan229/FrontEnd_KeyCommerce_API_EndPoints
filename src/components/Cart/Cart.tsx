import React from 'react';
import OverviewTemplate from '../StructuredTemplates/OverviewTemplate';
import apiData from '../../utilis/apiData'; // Import data from apiData.ts

const Cart: React.FC = () => {
  // Filter to get only the "Products" section
  const cartSection = apiData.sections.find(section => section.sectionTitle === "Cart");

  if (!cartSection) return null; // In case there's no Products section

  return <OverviewTemplate sections={[cartSection]} />;
};

export default Cart;
