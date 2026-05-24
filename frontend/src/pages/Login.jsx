import { useState } from "react";
import API from "../api/api.js";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await API.post("/auth/login", {
                email,
                password
            });

            console.log(response.data);

            localStorage.setItem("token", response.data.token);
            alert("Login successful");
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);

            alert("Login failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <div className="mb-3">
                    <label>Email</label>

                    <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>

                    <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;