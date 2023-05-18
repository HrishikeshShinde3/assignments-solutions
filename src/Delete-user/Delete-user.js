import React, { useState } from 'react';


function DeleteUser() {
  const [users, setUsers] = useState([]);
  //React hooks (useState) to manage the state of the form inputs and the list of submitted users.
  const [newUser, setNewUser] = useState('');  

  const handleInputChange = (event) => {
    //The handleInputChange function updates the newUser state as the input value changes
    setNewUser(event.target.value);
  };

  const handleSubmit = (event) => {
    //The handleSubmit function is called when the form is submitted
    // also it adds the new user to the users state array
    event.preventDefault();
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  const handleDelete = (index) => {
    //The handleDelete function removes a user from the users state array based on its index.
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);

    //When the delete button is clicked, the handleDelete function is called with the index of the user, and that user is removed from the list.
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new user"
          value={newUser}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteUser;