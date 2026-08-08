import { useState } from "react";

function Signup () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        console.log({
            name,
            email,
            password
        });
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
        </div>
    )
}

export default Signup;