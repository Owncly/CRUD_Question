import { FaTrash } from 'react-icons/fa';
import '../styles/TableDisplay.css';
import '../styles/NewUserForm.css';

function TableDisplay({ users, handleDelete }) {
  return (
    <div className="table-container">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.second_name}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>
                <button
                  onClick={() => handleDelete(user.id)}
                  style={{ // Using fa's delete button 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'red',
                  }}
                  title="Delete user"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDisplay;