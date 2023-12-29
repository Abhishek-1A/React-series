
import React, {useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleclick = (e) => {


  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleclick}>Submit</button>
    </div>
  );
}

export default Login;
