import React, {useState} from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import ErrorModal from './../UI/ErrorModal';

 const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

     const handleAddUser = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)('
            });
            return;
        }
        props.handleAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
     }

     const handleUsernameChange = (event) => {
         setEnteredUserName(event.target.value);
     }

     const handleAgeChange = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
           {error && <ErrorModal 
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className="container">
                <h3>Add new User</h3>
                <form className="add-user-form" onSubmit={handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        onChange={handleUsernameChange} 
                        value={enteredUserName}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        type="number"
                        id="age"
                        onChange={handleAgeChange} 
                        value={enteredAge}
                    />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
