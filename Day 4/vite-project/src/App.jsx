import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import Card from "./components/Card";

export default function App() {

  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(30);

  useEffect(() => {

    async function fetchUsersData() {

      if (userCount <= 0 || userCount === "") {
        setUsers([]);
        return;
      }

      try {

        const response = await fetch(
          `https://api.github.com/users?per_page=${userCount}`,
          {
            headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
          }
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();
        setUsers(data);

      }
      catch (error) {
        console.error(error);
      }

    }

    fetchUsersData();

  }, [userCount]);

  return (
    <>
      <h1 className="title">Github Users</h1>

      <div className="input-container">
        <label>User Count : </label>
        <input type="number" value={userCount} onChange={(event) => setUserCount(event.target.value)}></input>
      </div>

      <div className="container">
        {
          users.map(user => {
            return <Card key={user.id} {...user} />
          })
        }
      </div>

    </>
  );
}
