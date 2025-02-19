import React from "react";
import apiData from "../../utilis/apiData.json"; // Importing the JSON data
import EndpointDetailsTemplate from "../StructuredTemplates/EndpointTemplate"; // Import the template

interface Endpoint {
  title: string;
  description: string;
  method: string;
  url: string;
  apiKeyRequired: boolean;
  requestHeaders?: {
    "x-api-key": string;
  };
  responses: { [statusCode: string]: string };
  exampleRequest: string;
  exampleResponse: string;
}



interface Section {
  sectionTitle: string;
  sectionDescription: string;
  endpoints: Endpoint[];
}

interface ApiData {
  sections: Section[];
  
}

const GenerateApiKey: React.FC = () => {
  // Type the imported apiData as ApiData
  const apiDataTyped = apiData as ApiData;

  // Find the "API Key" section in the sections array
  const productSection = apiDataTyped.sections.find(
    (section) => section.sectionTitle === "API Key"
  );

  if (!productSection) {
    return <p className="text-red-500">No "API Key" section found.</p>;
  }

  // Find the "Generate API Key" endpoint within the "API Key" section
  const getProductEndpoint = productSection.endpoints.find(
    (endpoint) => endpoint.title === "Generate API Key"
  );

  if (!getProductEndpoint) {
    return <p className="text-red-500">No "Generate API Key" endpoint found.</p>;
  }

  // Ensure "x-api-key" is in the requestHeaders or provide a fallback
  const requestHeaders = getProductEndpoint.requestHeaders["x-api-key"]
    ? getProductEndpoint.requestHeaders
    : { "x-api-key": "default-api-key" }; // Provide a default key if missing

  // Pass the endpoint details to the template component
  return (
    <EndpointDetailsTemplate
      title={getProductEndpoint.title}
      description={getProductEndpoint.description}
      method={getProductEndpoint.method}
      url={getProductEndpoint.url}
      apiKeyRequired={getProductEndpoint.apiKeyRequired}
      requestHeaders={requestHeaders}
      responses={getProductEndpoint.responses}
      exampleRequest={getProductEndpoint.exampleRequest}
      exampleResponse={getProductEndpoint.exampleResponse}
    />
  );
};

export default GenerateApiKey;
