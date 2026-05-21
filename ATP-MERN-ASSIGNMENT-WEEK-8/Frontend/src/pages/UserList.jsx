import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://atp-mern-assignment-week-8-1-y33y.onrender.com/api/users');
      setUsers(response.data.payload);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://atp-mern-assignment-week-8-1-y33y.onrender.com/api/users/${id}`);
        setUsers(users.filter(user => user._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        alert(error.response?.data?.message || "Failed to delete user.");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <div className="grid-container">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map(user => (
            <div className="grid-item" key={user._id}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>DOB:</strong> {new Date(user.dateOfBirth).toLocaleDateString()}</p>
              <p><strong>Mobile:</strong> {user.mobileNumber || 'N/A'}</p>
              <button 
                className="delete-btn" 
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
