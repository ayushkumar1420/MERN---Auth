import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

function Signup () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/signup", {
            name,
            email,
            password
        });

        alert(response.data.message);

        navigate("/");

    } catch (error) {
        alert(error.response?.data?.message || "signup failed");
    }
    };

    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={handleSignup}>

        <input 
            type="name"
            placeholder="Enter name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input 
            type="email"
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input 
            type="password" 
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
            Signup
        </button>

        </form>

        <p>
            Already have an account?
            <Link to="/">Login here</Link>
        </p>
        </div>
    )
}

export default Signup;