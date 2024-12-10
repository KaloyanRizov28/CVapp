
export default function CVPreview({ basicInfo, education, experience }) {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      
      <div className="text-center border-b pb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          {basicInfo.nameUser || 'Your Name'}
        </h1>
        <div className="space-y-1 text-sm sm:text-base text-gray-600">
          {basicInfo.emailUser && <p>{basicInfo.emailUser}</p>}
          {basicInfo.phoneUser && <p>{basicInfo.phoneUser}</p>}
        </div>
      </div>
 
      
      {education.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary border-b pb-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="space-y-1 py-2">
              <h3 className="font-semibold">{edu.name}</h3>
              <p className="text-sm text-gray-600">
                {edu.from} - {edu.till}
              </p>
            </div>
          ))}
        </div>
      )}
 
      
      {experience.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary border-b pb-2">
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="space-y-2 py-2">
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="font-medium">{exp.position}</p>
              <p className="text-sm text-gray-600">
                {exp.from} - {exp.current ? 'Present' : exp.till}
              </p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
 }
