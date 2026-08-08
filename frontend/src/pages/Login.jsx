
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        console.log({ 
            email,
            password
        });
    };

return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input 
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
       />

       <input type="password"
       placeholder="Enter password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

      </form>
    </div>
  )
}

export default Login;
