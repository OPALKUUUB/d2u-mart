import React, { useState } from "react";
import useToken from "../hook/useToken";

async function loginUser(credentials) {
  return fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("fetch done!"));
}

export const Login = () => {
  const { setToken } = useToken();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username: username, password: password });
    setToken(token);
    window.location.reload(false);
  };
  return (
    <form
      onSubmit={handleLogin}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>Sign In</h1>
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
