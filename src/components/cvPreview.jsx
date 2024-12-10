import { Card, CardBody } from "@nextui-org/react";

export default function CVPreview({ basicInfo, education, experience }) {
  return (
    <CardBody className="p-8">
      
      <div className="text-center mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold mb-2">{basicInfo.nameUser || 'Your Name'}</h1>
        <div className="text-gray-600">
          {basicInfo.emailUser && <p>{basicInfo.emailUser}</p>}
          {basicInfo.phoneUser && <p>{basicInfo.phoneUser}</p>}
        </div>
      </div>

      
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-primary">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.name}</h3>
              <p className="text-sm text-gray-600">{edu.from} - {edu.till}</p>
            </div>
          ))}
        </div>
      )}

      
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-primary">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="font-medium">{exp.position}</p>
              <p className="text-sm text-gray-600">
                {exp.from} - {exp.current ? 'Present' : exp.till}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </CardBody>
  );
}


