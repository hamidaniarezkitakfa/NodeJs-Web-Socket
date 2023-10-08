import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';


function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Logique de traitement du formulaire
      console.log('Nom d\'utilisateur:', username);
      console.log('Mot de passe:', password);
  
      // Réinitialisation des champs après la soumission
      setUsername('');
      setPassword('');

      navigate('/chat');

    };
  
    return (
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nom d'utilisateur:</label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Adresse mail:</label>
            <input
              type="text"
              id="email"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="form-button" onClick={handleSubmit}>S'inscrire</button>
        </form>
      );


}
export default SignUp