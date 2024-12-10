

import { Card, CardBody, Divider } from "@nextui-org/react";
import MyForm from './basicInf';
import EducationInf from './educationInf';
import PracticalExperience from './koki';
import CVPreview from './CVPreview';

export default function CardInput() {
  return (
    <div className="h-[calc(100vh-65px)] p-5 pr-12">
      <div className="grid grid-cols-2 gap-6 h-full">
        
        <Card className="h-full overflow-auto">
          <CardBody className="gap-4">
            <MyForm />
            <Divider />
            <EducationInf />
            <Divider />
            <PracticalExperience />
          </CardBody>
        </Card>

        <Card className="h-full overflow-auto">
          <CardBody>
            <CVPreview />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}


