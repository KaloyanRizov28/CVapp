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
      <CardHeader className="flex justify-between items-center px-6">
        <h3 className="text-xl font-bold">Professional Experience</h3>
        <Button variant="shadow"
          color={showForm ? "danger" : "warning"}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Close' : 'Add Experience'}
        </Button>
      </CardHeader>
      <CardBody className="gap-4">
        {showForm && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="From"
                type="date"
                value={currentExperience.from}
                onValueChange={(value) => handleExperienceInput(value, 'from')}
                variant="bordered"
                isRequired
              />
              <Input
                label="Till"
                type="date"
                value={currentExperience.till}
                onValueChange={(value) => handleExperienceInput(value, 'till')}
                variant="bordered"
                isDisabled={currentExperience.current}
                isRequired={!currentExperience.current}
              />
            </div>

            <Checkbox
              isSelected={currentExperience.current}
              onValueChange={(checked) => handleExperienceInput(checked, 'current')}
            >
              I currently work here
            </Checkbox>

            <Button color="warning" type="submit" variant="shadow">
              {editIndex !== null ? 'Update Experience' : 'Add Experience'}
            </Button>
          </form>
        )}

        <div className="flex flex-col gap-4">
          {experience.map((exp, index) => (
            <Card key={index} shadow="sm">
              <CardBody>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.company}</h4>
                    <p className="font-medium">{exp.position}</p>
                    <p className="text-sm text-gray-600">
                      {exp.from} - {exp.current ? 'Present' : exp.till}
                    </p>
                    <p className="mt-2 text-gray-700">{exp.description}</p>
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
