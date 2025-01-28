import React from "react";

// Define your props type based on the structure of the JSON data
type Endpoint = {
  title: string;
  description: string;
  method: string;
  url: string;
  apiKeyRequired?: boolean;
  borderColor: string;
  methodColor?: string;
};

type Section = {
  sectionTitle: string;
  sectionDescription: string;
  endpoints: Endpoint[];
};

type OverviewTemplateProps = {
  sections: Section[];
};

const OverviewTemplate: React.FC<OverviewTemplateProps> = ({ sections }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-300 rounded-lg shadow-lg space-y-6">
    {sections.map((section) => (
  <>
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-white">{section.sectionTitle}</h2>
      <p className="text-sm leading-relaxed">
        The <span className="font-medium text-blue-400">{section.sectionTitle}</span>
        {section.sectionDescription}
      </p>
    </section>

    {section.endpoints.map((element) => (
      <section
        key={element.title}  // Use a unique key for the nested element items
        className={`border-l-4 ${element.borderColor} pl-4 space-y-4`}
      >
        <h3 className="text-lg font-medium text-white">{element.title}</h3>
        <p className="text-sm leading-relaxed">{element.description}</p>

        <div className="bg-gray-800 p-3 rounded-lg">
          <p className={`text-xs font-mono 
            ${element.method=="PUT"?"text-purple-400":element.method=="DELETE"?"text-red-400":element.method=="POST"?"text-teal-400":"text-blue-400"}
            
          `}>{element.method}</p>
          <p className="text-xs font-mono text-blue-300 break-all">
            {element.url}
          </p>
        </div>
      </section>
    ))}
  </>
))}

    </div>
  );
};

export default OverviewTemplate;
