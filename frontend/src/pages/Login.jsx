
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api;"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            alert(response.data.message);

            navigate("/dashboard");

        } catch (error) {
            alert(error.response?.data?.message || "login failed");
        }
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

      <p>
        Don't have account?
        <Link to="/signup"> Signup </Link>
      </p>
    </div>
  )
}

export default Login;
