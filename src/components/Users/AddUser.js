import React, {useState, useRef} from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import ErrorModal from './../UI/ErrorModal';

 const AddUser = (props) => {
    const nameInputRef =  useRef();
    const ageInputRef =  useRef();

    const [error, setError] = useState();

     const handleAddUser = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)('
            });
            return;
        }
        props.handleAddUser(enteredName, enteredUserAge);
        // Don't use this
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        type="number"
                        id="age"
                        ref={ageInputRef}
                    />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
