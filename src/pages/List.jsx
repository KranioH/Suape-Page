import React, { useState, useEffect } from "react";
import api from "../services/api";

const List = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const userFromApi = await api.get("/usuarios");

    setUsers(userFromApi.data);
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    getUsers();
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);
console.log(users);

  return (
    <div>
      <h1>Lista d eusuários</h1>
      <p>abaixo</p>
      {users.length > 0
        ? users.map((item) => {
            <p>{item.name}</p>;
          })
        : console.log("nada")}
    </div>
  );
};

export default List;
