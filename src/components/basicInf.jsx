import { useState } from "react";
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";

export default function BasicInfo({ basicInfo, setBasicInfo }) {
  const [showForm, setShowForm] = useState(true);

  const handleInfoChange = (value, field) => {
    setBasicInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center px-6">
        <h3 className="text-xl font-bold">Basic Information</h3>
        <Button variant="shadow"
          color={showForm ? "danger" : "warning"}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Submit' : 'Edit'}
        </Button>
      </CardHeader>
      <CardBody className="gap-4">
        {showForm && (
          <div className="flex flex-col gap-4">
            <Input
              label="Full Name"
              value={basicInfo.nameUser}
              onValueChange={(value) => handleInfoChange(value, 'nameUser')}
              variant="bordered"
            />
            <Input
              label="Email"
              type="email"
              value={basicInfo.emailUser}
              onValueChange={(value) => handleInfoChange(value, 'emailUser')}
              variant="bordered"
            />
            <Input
              label="Phone"
              type="tel"
              value={basicInfo.phoneUser}
              onValueChange={(value) => handleInfoChange(value, 'phoneUser')}
              variant="bordered"
            />
          </div>
        )}
      </CardBody>
    </Card>
  );
}