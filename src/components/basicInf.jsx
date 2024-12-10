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
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 py-3 sm:px-6">
        <h3 className="text-xl font-bold">Basic Information</h3>
        <Button 
          variant="shadow"
          color={showForm ? "danger" : "primary"}
          size="sm"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Submit' : 'Edit'}
        </Button>
      </CardHeader>
      <CardBody className="gap-4 px-4 sm:px-6">
        {showForm && (
          <div className="flex flex-col gap-4">
            <Input
              label="Full Name"
              value={basicInfo.nameUser}
              onValueChange={(value) => handleInfoChange(value, 'nameUser')}
              variant="bordered"
              fullWidth
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>
        )}
      </CardBody>
    </Card>
  );
}