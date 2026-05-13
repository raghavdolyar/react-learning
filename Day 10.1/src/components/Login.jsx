import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser({ username, password });
    evt.reset();
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        // value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        placeholder='Enter your username'
      />
      <br />
      <input
        type='password'
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        placeholder='Enter your password'
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
