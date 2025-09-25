import { useState } from 'react';
import '../styles/NewUserForm.css';
function UserForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    onSubmit(formData);
  };

  //Using standard form required and date input type ease of use for user
  return (
    <div className="form-overlay">
        <div className="form-content">
            <form onSubmit={handleSubmit}>
            <input name="first_name" placeholder="First Name" onChange={handleChange} required />
            <input name="last_name" placeholder="Last Name" onChange={handleChange} required />
            <input name="dob" type="date" onChange={handleChange} required />
            <button type="submit">Create</button>
            <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    </div>
  );
}

export default UserForm;