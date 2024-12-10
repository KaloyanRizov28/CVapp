import { useState } from "react";
import { Card, CardHeader, CardBody, Button, Input, Divider } from "@nextui-org/react";

export default function Education({ education, setEducation }) {
  const [showForm, setShowForm] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({
    name: '',
    from: '',
    till: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleEducationInput = (value, field) => {
    setCurrentEducation(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setEducation(prev => prev.map((item, index) => 
        index === editIndex ? currentEducation : item
      ));
      setEditIndex(null);
    } else {
      setEducation(prev => [...prev, currentEducation]);
    }
    setCurrentEducation({ name: '', from: '', till: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentEducation(education[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center px-6">
        <h3 className="text-xl font-bold">Education</h3>
        <Button
          variant="shadow"
          color={showForm ? "danger" : "warning"}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close' : 'Add Education'}
        </Button>
      </CardHeader>
      <CardBody className="gap-4">
        {showForm && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Institution Name"
              value={currentEducation.name}
              onValueChange={(value) => handleEducationInput(value, 'name')}
              variant="bordered"
              isRequired
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="From"
                type="date"
                value={currentEducation.from}
                onValueChange={(value) => handleEducationInput(value, 'from')}
                variant="bordered"
                isRequired
              />
              <Input
                label="Till"
                type="date"
                value={currentEducation.till}
                onValueChange={(value) => handleEducationInput(value, 'till')}
                variant="bordered"
                isRequired
              />
            </div>
            <Button color="warning" type="submit">
              {editIndex !== null ? 'Update Education' : 'Add Education'}
            </Button>
          </form>
        )}

        <div className="flex flex-col gap-4">
          {education.map((edu, index) => (
            <Card key={index} shadow="sm">
              <CardBody>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{edu.name}</h4>
                    <p className="text-sm text-gray-600">{edu.from} - {edu.till}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" color="primary" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button size="sm" color="danger" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}