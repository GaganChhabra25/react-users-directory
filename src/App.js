import React, {useState} from 'react'
import './App.css';
import AddUser from './components/Users/AddUser';
import Users from './components/Users/Users';

const App = () => {

  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (userName, userAge) => {
    setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser
          handleAddUser={handleAddUser}
      />
      <Users
        users={usersList}
      />
    </div>
  );
}

export default App;
