import {useState} from 'react';
import './styles/basicInfo.css'
export default function MyForm(){ // use this to show the form when cliking on edit.
    const [showForm, setShowForm] = useState(true);
    const [basicInf, setBasicInf] = useState({nameUser:'',
        emailUser:'',
        phoneUser:''

    })
    let buttonInside ="Submit"
    const handleBasicInf = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setBasicInf({...basicInf,[name]:value})

    }
    const handleShowForm = () => {
        
        setShowForm(!showForm);

    
    }
    
    return (
        <div className='wrapper'>
      <div className='basicInfoForm'>
        <h3>Basic info:</h3>
      

      {showForm && (
        <form className='formUser'>
          <label>
            Name: <input type="text" name='nameUser' value={basicInf.nameUser || ""} onChange={handleBasicInf}/> 
          </label>
          <label>
            Phone Number : <input type='tel' name='phoneUser' value={basicInf.phoneUser ||""} onChange={handleBasicInf}/>
          </label>
          <label>
            Email: <input type='email' name='emailUser' value={basicInf.emailUser ||""} onChange={handleBasicInf}/>
          </label>
        </form>
        
      )}
      <button onClick={handleShowForm}>{showForm ? <div>Submit</div>: <div>Edit</div>}</button>
      </div>
      <div className='basicInfoDisplay'>
           <h1>Name: {basicInf.nameUser} </h1>
           <h4>Phone Number: {basicInf.phoneUser}</h4>
           <h4>Email: {basicInf.emailUser}</h4>
      </div>
    </div>
    )
}