
import React from "react";
import EndpointDetailsTemplate from "../StructuredTemplates/EndpointTemplate";
import rawApiData from "../../utilis/apiData.json"; // Importing the JSON data

// Define the API Response interface
interface ApiResponse{
  apiKey: string;
  message: string;
}
// Define required headers (with optional fields)
interface RequiredHeaders {
  "Content-Type"?: string;
  "x-api-key": string;
  "Cache-Control"?: string;
  "Authorization"?:string;
}

// Define the endpoint response interface
interface EndpointResponse {
  status: string,
  description : string,
  exampleResponse : ApiResponse
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

// Ensure JSON data is properly typed
// const apiDataTyped = apiData as ApiData;
const apiDataTyped = rawApiData as unknown as ApiData;

const GenerateApiKey: React.FC = () => {
  // Ensure apiDataTyped.sections exist before proceeding
  if (!apiDataTyped?.sections || apiDataTyped.sections.length === 0) {
    return (
      <div className="p-4 mt-4 bg-red-100 border border-red-400 text-red-700">
        <p className="font-medium">Error: API documentation data is missing.</p>
      </div>
    );
  }

  // Find the "API Key" section
  const apiKeySection = apiDataTyped.sections.find(
    (section) => section.sectionTitle === "API Key"
  );

  if (!apiKeySection) {
    return (
      <div className="p-4 mt-4 bg-red-100 border border-red-400 text-red-700">
        <p className="font-medium">Error: API Key section not found.</p>
      </div>
    );
  }

  // Find the "Generate API Key" endpoint
  const generateApiKeyEndpoint = apiKeySection.endpoints.find(
    (endpoint) => endpoint.title === "Generate API Key"
  );

  if (!generateApiKeyEndpoint) {
    return (
      <div className="p-4 mt-4 bg-red-100 border border-red-400 text-red-700">
        <p className="font-medium">Error: Generate API Key endpoint not found.</p>
      </div>
    );
  }

  // Ensure request headers contain required fields
  const requestHeaders: RequiredHeaders = {
    "Content-Type": generateApiKeyEndpoint.requestHeaders["Content-Type"] || "application/json",
    "x-api-key": generateApiKeyEndpoint.requestHeaders["x-api-key"],
    "Cache-Control": generateApiKeyEndpoint.requestHeaders["Cache-Control"] || "no-cache",
  };

  return (
    <EndpointDetailsTemplate
      title={generateApiKeyEndpoint.title}
      description={generateApiKeyEndpoint.description}
      method={generateApiKeyEndpoint.method}
      url={generateApiKeyEndpoint.url}
      apiKeyRequired={generateApiKeyEndpoint.apiKeyRequired}
      requestHeaders={requestHeaders}
      responses={generateApiKeyEndpoint.responses}
      exampleRequest={generateApiKeyEndpoint.exampleRequest}
      exampleResponse={generateApiKeyEndpoint.exampleResponse}
    />
  );
};

export default GenerateApiKey;

