import React from "react";
import apiData from "../../utilis/apiData.json"; // Importing the JSON data
import EndpointDetailsTemplate from "../StructuredTemplates/EndpointTemplate"; // Import the template

const GetCart: React.FC = () => {
  // Find the "Products" section in the sections array
  const productSection = apiData.sections.find((section) => section.sectionTitle === "Cart");

  if (!productSection) {
    return <p className="text-red-500">No "Products" section found.</p>;
  }

  // Find the "Get Products List" endpoint within the "Products" section
  const getProductEndpoint = productSection.endpoints.find(
    (endpoint) => endpoint.title === "Get Cart Details"
  );

  if (!getProductEndpoint) {
    return <p className="text-red-500">No "Get Products List" endpoint found.</p>;
  }

  // Pass the endpoint details to the template component
  return (
    <EndpointDetailsTemplate
      title={getProductEndpoint.title}
      description={getProductEndpoint.description}
      method={getProductEndpoint.method}
      url={getProductEndpoint.url}
      apiKeyRequired={getProductEndpoint.apiKeyRequired}
      requestHeaders={getProductEndpoint.requestHeaders}
      responses={getProductEndpoint.responses}
      exampleRequest={getProductEndpoint.exampleRequest}
      exampleResponse={getProductEndpoint.exampleResponse}
    />
  );
};

export default GetCart;
