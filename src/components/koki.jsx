import { useState } from "react";
import './styles/mian.css';

export default function PracticalExperience() {
  const [showForm, setShowForm] = useState(false);
  const [experienceList, setExperienceList] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    position: '',
    description: '',
    from: '',
    till: '',
    current: false
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleShowForm = () => {
    setShowForm(!showForm);
    if (showForm) {
      setCurrentExperience({
        company: '',
        position: '',
        description: '',
        from: '',
        till: '',
        current: false
      });
      setEditIndex(null);
    }
  };

  const handleExperienceInput = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentExperience(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEdit = (index) => {
    setCurrentExperience(experienceList[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      setExperienceList(prev => prev.map((item, index) => 
        index === editIndex ? currentExperience : item
      ));
      setEditIndex(null);
    } else {
      setExperienceList(prev => [...prev, currentExperience]);
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

  return (
    <div className="section-card">
      <div className="section-header">
        <h3 className="section-title">Professional Experience</h3>
        <button 
          className={`btn ${showForm ? 'btn-danger' : 'btn-primary'}`}
          onClick={handleShowForm}
        >
          {showForm ? 'Close' : 'Add Experience'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="grid-container" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="company"
                value={currentExperience.company}
                onChange={handleExperienceInput}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={currentExperience.position}
                onChange={handleExperienceInput}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={currentExperience.description}
              onChange={handleExperienceInput}
              className="form-control"
              rows="3"
              required
            />
          </div>

          <div className="grid-container" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label>From:</label>
              <input
                type="date"
                name="from"
                value={currentExperience.from}
                onChange={handleExperienceInput}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Till:</label>
              <input
                type="date"
                name="till"
                value={currentExperience.till}
                onChange={handleExperienceInput}
                className="form-control"
                disabled={currentExperience.current}
                required={!currentExperience.current}
              />
            </div>
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              name="current"
              checked={currentExperience.current}
              onChange={handleExperienceInput}
              id="current-position"
              style={{ width: 'auto' }}
            />
            <label htmlFor="current-position" style={{ margin: 0 }}>I currently work here</label>
          </div>

          <button type="submit" className="btn btn-success" style={{ width: '100%', marginTop: '1rem' }}>
            {editIndex !== null ? 'Update Experience' : 'Add Experience'}
          </button>
        </form>
      )}

      {experienceList.map((exp, index) => (
        <div key={index} className="info-card">
          <div className="info-card-header">
            <div>
              <h4 className="info-card-title">{exp.company}</h4>
              <p className="info-card-subtitle">{exp.position}</p>
              <p className="info-card-subtitle">
                {exp.from} - {exp.current ? 'Present' : exp.till}
              </p>
            </div>
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
          <p style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}