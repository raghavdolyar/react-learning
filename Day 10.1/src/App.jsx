import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

export default function App() {
  return (
    <UserContextProvider>
      <h2>I am App Component</h2>
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  );
}
