import { useState } from "react";
import { Card } from "@nextui-org/react";
import BasicInfo from './basicInf';
import Education from './educationInf';
import Experience from './koki';
import CVPreview from './cvPreview'

export default function CVBuilder() {
  const [basicInfo, setBasicInfo] = useState({
    nameUser: '',
    emailUser: '',
    phoneUser: ''
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="h-[calc(100vh-65px)] p-5 pr-12">
      <div className="grid grid-cols-2 gap-6 h-full">
        
        <Card className="h-full overflow-auto p-6">
          <div className="flex flex-col gap-6">
            <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
            <Education education={education} setEducation={setEducation} />
            <Experience experience={experience} setExperience={setExperience} />
          </div>
        </Card>

        
        <Card className="h-full overflow-auto">
          <CVPreview 
            basicInfo={basicInfo}
            education={education}
            experience={experience}
          />
        </Card>
      </div>
    </div>
  );
}