import { useState } from "react";

export default function EducationInf(){
    const [showForm, setShowForm] = useState(false);
    const [educationList, setEducationList] = useState([]);
    const [currentEducation, setCurrentEducation] = useState({
        name: '',
        from: '',
        till: ''
      });
    const [editIndex, setEditIndex] = useState(null); // Add this to track which item we're editing

    
    const handleShowForm = () => {
        setShowForm(!showForm);
        // Reset form when closing
        if (showForm) {
            setCurrentEducation({ name: '', from: '', till: '' });
            setEditIndex(null);
        }
    };
    const handleEdit = (index) => {
        setCurrentEducation(educationList[index]); // Set form data to the education being edited
        setEditIndex(index); // Save the index we're editing
        setShowForm(true); // Open the form
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (editIndex !== null) {
            // We're editing - update existing education
            setEducationList(prev => prev.map((item, index) => 
                index === editIndex ? currentEducation : item
            ));
            setEditIndex(null); // Reset edit index
        } else {
            // We're adding new education
            setEducationList(prev => [...prev, currentEducation]);
        }
        
        // Reset form and close it
        setCurrentEducation({ name: '', from: '', till: '' });
        setShowForm(false);
    };
    const handleEducationInf = (e) => {
    const { name, value } = e.target;
    setCurrentEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };
    const handleClick = () => {
        if (showForm) {
            handleShowForm();
            
        } else {
            handleShowForm();
        }
    };
    const handleDelete = (index) => {
        setEducationList(prev => prev.filter((_, i) => i !== index));
      };
      

return(
 <>   
  <h3>Education info:</h3>
 <button onClick={handleClick}>{showForm ? <div>Close</div>: <div>Add Education Section</div>}</button>
 {showForm && 
 <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1">
              Name:
              <input
                type="text"
                name="name"
                value={currentEducation.name}
                onChange={handleEducationInf}
                className="border rounded p-2 w-full"
                required
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">
              From:
              <input
                type="date"
                name="from"
                value={currentEducation.from}
                onChange={handleEducationInf}
                className="border rounded p-2 w-full"
                required
              />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">
              Till:
              <input
                type="date"
                name="till"
                value={currentEducation.till}
                onChange={handleEducationInf}
                className="border rounded p-2 w-full"
                required
              />
            </label>
          </div>

          <button 
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
}

{educationList.map((edu, index) => (
        <div key={index} className="mb-4 p-3 border rounded">
          <p><strong>Name:</strong> {edu.name}</p>
          <p><strong>From:</strong> {edu.from}</p>
          <p><strong>Till:</strong> {edu.till}</p>
          <button 
            onClick={() => handleDelete(index)}
            className="mt-2 text-red-600 hover:text-red-800"
          >
            Delete
          </button>
          <button
          onClick={() => handleEdit(index)}>Edit</button>
          
        </div>
      ))}
 
 </>
)
}