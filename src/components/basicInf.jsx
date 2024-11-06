import {useState} from 'react';
import './styles/mian.css'
export default function MyForm(){ // use this to show the form when cliking on edit.
    const [showForm, setShowForm] = useState(true);
    const [basicInf, setBasicInf] = useState({nameUser:'',
        emailUser:'',
        phoneUser:''

    })
    
    const handleBasicInf = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setBasicInf({...basicInf,[name]:value})

    }
    const handleShowForm = () => {
        
        setShowForm(!showForm);

    
    }
    
    return (
      <div className="section-card">
      <div className="section-header">
        <h3 className="section-title">Basic Info</h3>
        <button 
          className={`btn ${showForm ? 'btn-danger' : 'btn-primary'}`}
          onClick={handleShowForm}
        >
          {showForm ? 'Submit' : 'Edit'}
        </button>
      </div>

      {showForm && (
        <form className="form-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="nameUser"
              value={basicInf.nameUser || ""}
              onChange={handleBasicInf}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneUser"
              value={basicInf.phoneUser || ""}
              onChange={handleBasicInf}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="emailUser"
              value={basicInf.emailUser || ""}
              onChange={handleBasicInf}
              className="form-control"
            />
          </div>
        </form>
      )}

      <div className="info-card">
        <h4 className="info-card-title">Name: {basicInf.nameUser}</h4>
        <p className="info-card-subtitle">Phone: {basicInf.phoneUser}</p>
        <p className="info-card-subtitle">Email: {basicInf.emailUser}</p>
      </div>
    </div>
  );
}