import { useState } from 'react';
import '../styles/NewUserForm.css';
function UserForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    first_name: '',
    second_name: '',
    age: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-overlay">
        <div className="form-content">
            <form onSubmit={handleSubmit}>
            <input name="first_name" placeholder="First Name" onChange={handleChange} required />
            <input name="second_name" placeholder="Last Name" onChange={handleChange} required />
            <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
            <input name="dob" type="date" onChange={handleChange} required />
            <button type="submit">Create</button>
            <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    </div>
  );
}

export default UserForm;