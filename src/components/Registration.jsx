import React, { useState } from "react";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("vrijwilliger");


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8800/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered successfully!");
        console.log(data);
      })
      .catch((error) => {
        console.log("Error registering user: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Your username</label>
        <input
          type="username"
          name="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Your role</label>
        <input
          type="role"
          name="role"
          id="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
