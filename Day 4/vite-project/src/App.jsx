import { useEffect } from "react";
import { useState } from "react";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsersData() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      console.log("response fetched successfully");
    }

    fetchUsersData();

  }, []);



  return (
    <>
      <h2>Github User</h2>

    </>
  );
}