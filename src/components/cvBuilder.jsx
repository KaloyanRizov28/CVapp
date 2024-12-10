import { useState } from "react";
import { Card  , CardBody , Button} from "@nextui-org/react";
import BasicInfo from './basicInf';
import Education from './educationInf';
import Experience from './koki';
import CVPreview from './cvPreview'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
 } from "@nextui-org/react";



 export default function CVBuilder() {
  const [basicInfo, setBasicInfo] = useState({
    nameUser: '',
    emailUser: '',
    phoneUser: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="min-h-[calc(100vh-64px)] p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        
        <Card className="h-full overflow-auto">
          <CardBody className="gap-4">
            <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
            <div className="h-4" /> 
            <Education education={education} setEducation={setEducation} />
            <div className="h-4" /> 
            <Experience experience={experience} setExperience={setExperience} />
          </CardBody>
        </Card>

        
        <Card className="h-full overflow-auto sticky top-4 hidden lg:block">
          
          <CVPreview 
            basicInfo={basicInfo}
            education={education}
            experience={experience}
          />
        </Card>

        
        <Button
          className="fixed bottom-4 right-4 lg:hidden"
          color="primary"
          onClick={onOpen}
           variant="shadow"
        >
          Preview CV
        </Button>
        <Modal 
   isOpen={isOpen} 
   onClose={onClose}
   size="full" 
   scrollBehavior="inside"
 >
   <ModalContent>
     <ModalHeader className="flex flex-col gap-1">
       CV Preview
     </ModalHeader>
     <ModalBody>
       <CVPreview 
         basicInfo={basicInfo}
         education={education}
         experience={experience}
       />
     </ModalBody>
     <ModalFooter>
       <Button color="danger" variant="light" onPress={onClose}>
         Close
       </Button>
       
     </ModalFooter>
   </ModalContent>
 </Modal>
      </div>
    </div>
  );
}