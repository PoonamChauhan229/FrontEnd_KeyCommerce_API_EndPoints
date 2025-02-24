import React from "react";
import rawApiData from "../../utilis/apiData.json"; // Importing the JSON data
import EndpointDetailsTemplate from "../StructuredTemplates/EndpointTemplate"; // Import the template

interface ApiResponse{
  productId: string;
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  productImage?: string;
  qty?: number;
  totalPrice?: number; 
  _id: string;
}
// Define required headers (with optional fields)
interface RequiredHeaders {
  "x-api-key": string;
}

// Define the endpoint response interface
interface EndpointResponse {
  status: string,
  description : string,
  exampleResponse? : ApiResponse
 }

// Define the endpoint interface
interface Endpoint {
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  apiKeyRequired: boolean;
  requestHeaders: RequiredHeaders;
  responses: {
    [index: string]: EndpointResponse;
  };
  responseFields:ApiResponse;
  exampleRequest: {
    curl: string;   
  };
  exampleResponse: {
    status: string;
    response: string;
    body: ApiResponse;
    headers: RequiredHeaders;
  };
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

const AddCart: React.FC = () => {
  // Find the "Products" section in the sections array
  const productSection = apiDataTyped.sections.find((section) => section.sectionTitle === "Cart");

  if (!productSection) {
    return <p className="text-red-500">No "Products" section found.</p>;
  }

  // Find the "Get Products List" endpoint within the "Products" section
  const getProductEndpoint = productSection.endpoints.find(
    (endpoint) => endpoint.title === "Add Item to Cart"
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

export default AddCart;
