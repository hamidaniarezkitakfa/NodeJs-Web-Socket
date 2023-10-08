import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function Home({socket}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
      localStorage.setItem('username', username);
      // On crée un nouvel user
      socket.emit('new_user', {username, socketID: socket.id});
      navigate('/chat');
    }
    const navige = () => {
      navigate('/SignUp');
    }

    return (
      <div className="home-container">
        <button className="signUp-btn" onClick={navige}>Sign Up</button>
        <h2>Sign in</h2>
        <label>Username : </label>
        <input 
            type="text"
            className="user-input"
            placeholder='Your Name...'
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={(event) => {
              event.key === "Enter" && handleSubmit()
            }}
        />
        <label>Passeword : </label>
        <input 
            type="text"
            className="user-input"
            placeholder='Your Passeword...'
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={(event) => {
              event.key === "Enter" && handleSubmit()
            }}
        />
        <button className="home-btn" onClick={handleSubmit}>Go !</button>
      </div>
    )
}

export default Home