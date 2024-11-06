import { useState } from "react";
import './styles/mian.css'

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
      

      return (
        <div className="section-card">
          <div className="section-header">
            <h3 className="section-title">Education Info</h3>
            <button 
              className={`btn ${showForm ? 'btn-danger' : 'btn-primary'}`}
              onClick={handleClick}
            >
              {showForm ? 'Close' : 'Add Education'}
            </button>
          </div>
    
          {showForm && (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentEducation.name}
                  onChange={handleEducationInf}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>From:</label>
                <input
                  type="date"
                  name="from"
                  value={currentEducation.from}
                  onChange={handleEducationInf}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Till:</label>
                <input
                  type="date"
                  name="till"
                  value={currentEducation.till}
                  onChange={handleEducationInf}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          )}
    
          {educationList.map((edu, index) => (
            <div key={index} className="info-card">
              <div className="info-card-header">
                <h4 className="info-card-title">{edu.name}</h4>
                <div className="button-group">
                  <button 
                    onClick={() => handleEdit(index)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="info-card-subtitle">From: {edu.from}</p>
              <p className="info-card-subtitle">Till: {edu.till}</p>
            </div>
          ))}
        </div>
      );
    }