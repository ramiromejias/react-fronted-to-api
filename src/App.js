import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({});

  let url = "https://randomuser.me/api/?results=3&page=1";

  const fetchUsers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    url = "https://randomuser.me/api/?results=3&page=";
    const prevPage = info.page - 1;
    fetchUsers(url + prevPage);
  };

  const onNext = () => {
    url = "https://randomuser.me/api/?results=3&page=";
    const nextPage = info.page + 1;
    fetchUsers(url + nextPage);
  };

  useEffect(() => {
    fetchUsers(url);
  }, []);

  return (
    <>
      <Navbar brand="React Frontend To API" />
      <div className="container mt-4">
        <Pagination page={info.page} onPrevious={onPrevious} onNext={onNext} />
        <Users users={users} />
      </div>
    </>
  );
}

export default App;
