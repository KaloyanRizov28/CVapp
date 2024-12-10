import { useState } from "react";
import { Card, CardHeader, CardBody, Button, Input, Textarea, Checkbox } from "@nextui-org/react";

export default function Experience({ experience, setExperience }) {
  const [showForm, setShowForm] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    position: '',
    description: '',
    from: '',
    till: '',
    current: false
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleExperienceInput = (value, field) => {
    setCurrentExperience(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setExperience(prev => prev.map((item, index) => 
        index === editIndex ? currentExperience : item
      ));
      setEditIndex(null);
    } else {
      setExperience(prev => [...prev, currentExperience]);
    }
    setCurrentExperience({
      company: '',
      position: '',
      description: '',
      from: '',
      till: '',
      current: false
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentExperience(experience[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setExperience(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card>
    <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 py-3 sm:px-6">
      <h3 className="text-xl font-bold">Professional Experience</h3>
      <Button
        variant="shadow"
        color={showForm ? "danger" : "primary"}
        size="sm"
        onPress={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Add Experience'}
      </Button>
    </CardHeader>
    <CardBody className="gap-4 px-4 sm:px-6">
      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Company Name"
              value={currentExperience.company}
              onValueChange={(value) => handleExperienceInput(value, 'company')}
              variant="bordered"
              isRequired
            />
            <Input
              label="Position"
              value={currentExperience.position}
              onValueChange={(value) => handleExperienceInput(value, 'position')}
              variant="bordered"
              isRequired
            />
          </div>

          <Textarea
            label="Description"
            value={currentExperience.description}
            onValueChange={(value) => handleExperienceInput(value, 'description')}
            variant="bordered"
            minRows={3}
            isRequired
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
          </div>
        </form>
      )}

      <div className="flex flex-col gap-4">
        {experience.map((exp, index) => (
          <Card key={index} shadow="sm">
            <CardBody>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="w-full">
                  <h4 className="text-lg font-semibold">{exp.company}</h4>
                  <p className="font-medium">{exp.position}</p>
                  <p className="text-sm text-gray-600">
                    {exp.from} - {exp.current ? 'Present' : exp.till}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button size="sm" color="primary" onPress={() => handleEdit(index)} fullWidth>
                    Edit
                  </Button>
                  <Button size="sm" color="danger" onPress={() => handleDelete(index)} fullWidth>
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
