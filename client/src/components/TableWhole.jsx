import { useEffect, useState } from 'react';
import { UserGetService } from '../services/UserGetService';
import TableDisplay from './TableDisplay';
import UserForm from './NewUserForm'; 
import '../styles/TableWhole.css';

function TableWhole() {
  //Initialise states users and the overlay on the form
  const [users, setUsers] = useState([]);
  //Using False state so only form when clicked
  const [showForm, setShowForm] = useState(false); 


  //Fetch users on start using service
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await UserGetService.getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to get users:', error);
      }
    };
    fetchUsers();
  }, []);

  //Delete users using await
  const handleDelete = async (id) => {
    try {
      await UserGetService.deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  //Create user and update table
  const handleCreate = async (newUser) => {
    try {
      const created = await UserGetService.createUser(newUser);
      setUsers(prev => [...prev, created]);
      setShowForm(false);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div>
      {/* Button for form  running handleCreate once done */}
      <div className="table-comp-container">
        <button className="add-button" onClick={() => setShowForm(true)}>Add User</button>
        {showForm && <UserForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />}

        {/* Giving display table data and prop ability to delete */}
        <TableDisplay users={users} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default TableWhole;