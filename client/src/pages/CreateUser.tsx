import { useState, FormEvent, ChangeEvent } from "react";


import { createUser } from "../api/authAPI";  // Import the login function from the API
import { NewUserData} from "../interfaces/NewUserData.tsx";  // Import the interface for UserLogin


const CreateUser = () => {
  // create a form that will take the imput of the user and create a new user in the user database
    // State to manage the login form data
    const [loginData, setLoginData] = useState<NewUserData>({
      username: '',
      email: '',
      password: ''
    }); // State to manage the login form data  
    const [successMessage, setSuccessMessage] = useState<string | null>(null); 

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
          // Call the login API endpoint with loginData
            await createUser(loginData);
            setSuccessMessage('User created successfully! Return to the login page to login');
        } catch (err) {
          console.error('Failed to create user', err);  // Log any errors that occur during login
        }
     };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Create A New User</h1>
        {/* Username input field */}
        <div className="form-group">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        {/* Email input field */}
        <div className="form-group">
          <label>Email</label>
          <input 
            className="form-input"
            type='email'
            name='email'
            value={loginData.email || ''}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div className="form-group">
          <button className="btn btn-primary" type='submit'>Create User</button>        
        </div>
</form>
{/* display success message after form is submitted */}
({successMessage && <p>{successMessage}</p>})
    </div>
  )
};

export default CreateUser;