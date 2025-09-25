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
    e.preventDefault();
    const dob = new Date(formData.dob);
    const current = new Date();
    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(current.getFullYear() - 100);
    if (dob > current) {
      alert("Date of birth cannot be in the future.");
      return;
    }

    if (dob < hundredYearsAgo) {
      alert("Date of birth cannot be more than 100 years ago.");
      return;
    }

    onSubmit(formData);
  };

  //Using standard form required and date input type ease of use for user
  return (
    <div className="form-overlay">
        <div className="form-content">
            <form onSubmit={handleSubmit}>
            <input name="first_name"  pattern="[A-Za-z\s\-']+" title="Name can only contain letters" maxLength={35} placeholder="First Name" onChange={handleChange} required />
            <input name="last_name" pattern="[A-Za-z\s\-']+" title="Name can only contain letters" maxLength={35} placeholder="Last Name" onChange={handleChange} required />
            <input name="dob" type="date" onChange={handleChange} required />
            <button type="submit">Create</button>
            <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    </div>
  );
}

export default UserForm;