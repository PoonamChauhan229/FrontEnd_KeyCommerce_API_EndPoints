import React from "react";

interface ApiResponse {
  name: string;
  price: number;
  description: string;
  category: string;
  productImage: string;
  _id: string;
}

interface EndpointData {
  title: string;
  description: string;
  method: string;
  url: string;
  apiKeyRequired: boolean;
  requestHeaders?: { "x-api-key": string };
  responses: {
    [statusCode: string]: {
      status: string;
      description: string;
      exampleResponse?: ApiResponse;
    };
  };
  exampleRequest: {
    curl: string;
  };
  exampleResponse: {
    status: string;
    response: string;
    body: ApiResponse;
    headers: {
      "Content-Type": string;
      "x-api-key": string;
      "Cache-Control": string;
    };
  };
}

const EndpointDetailsTemplate: React.FC<EndpointData> = ({
  title,
  description,
  method,
  url,
  apiKeyRequired,
  requestHeaders,
  responses,
  exampleRequest,
  exampleResponse,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
        <p className="text-sm leading-relaxed">{description}</p>
      </section>

      <section className="border-l-4 border-blue-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Endpoint Info</h3>
        <p className="text-sm leading-relaxed">
          This endpoint allows users to interact with the KeyCommerce platform. A valid API key is required for secure access.
        </p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-xs font-mono text-green-400">{method}</p>
          <p className="text-xs font-mono text-blue-300 break-all">{url}</p>
        </div>

        {apiKeyRequired && (
          <section>
            <h4 className="text-sm font-medium text-white mt-4">Request Headers</h4>
            {requestHeaders && (
              <p className="text-xs bg-gray-800 p-3 rounded-lg text-gray-300">
                <span className="text-yellow-300 font-medium">x-api-key: </span>
                <span className="text-white">{requestHeaders["x-api-key"]}</span>
              </p>
            )}
          </section>
        )}

        <section>
          <h4 className="text-sm font-medium text-white mt-4">Response</h4>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            {Object.entries(responses).map(([statusCode, response]) => (
              <li key={statusCode}>
                <span
                  className={`font-medium ${
                    statusCode === "200" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {response.status}:
                </span>
                {response.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h4 className="text-sm font-medium text-white mb-2">Response Body</h4>
          <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-200">
            <p className="text-blue-300">// Response Body Fields</p>
            <pre className="whitespace-pre-wrap break-words text-sm text-gray-300">
              {JSON.stringify(exampleResponse.body, null, 2)}
            </pre>
          </div>
        </section>
      </section>

      <section className="border-l-4 border-blue-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Example Request</h3>
        <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-200">
          <p className="text-green-400 mb-2">curl</p>
          <code>{exampleRequest.curl}</code>
        </div>
      </section>

      <section className="border-l-4 border-green-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Example Response</h3>
        <p className="text-sm leading-relaxed">
          <span className="text-green-400 font-medium">{exampleResponse.status}</span>:{" "}
          {exampleResponse.response}
        </p>
        <div className="bg-gray-800 p-4 rounded-lg font-mono text-xs text-gray-200">
          <p className="text-blue-300">// Response Body</p>
          <pre className="whitespace-pre-wrap break-words text-sm text-gray-300">
            {JSON.stringify(exampleResponse.body, null, 2)}
          </pre>
        </div>
      </section>

      <section className="border-l-4 border-yellow-400 pl-4 space-y-4">
        <h3 className="text-lg font-medium text-white">Response Headers</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <span className="font-medium text-blue-400">Content-Type:</span>{" "}
            {exampleResponse.headers["Content-Type"]}
          </li>
          <li>
            <span className="font-medium text-blue-400">x-api-key:</span>{" "}
            {exampleResponse.headers["x-api-key"]}
          </li>
          <li>
            <span className="font-medium text-blue-400">Cache-Control:</span>{" "}
            {exampleResponse.headers["Cache-Control"]}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EndpointDetailsTemplate;
