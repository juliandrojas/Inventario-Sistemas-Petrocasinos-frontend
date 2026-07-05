import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    // Eliminamos todo lo que no sea dígito
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setPin(onlyNumbers);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviamos los datos al servidor de prueba
    const response = await fetch("http://localhost:5000/test/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password: pin }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert("Login successful!");
    } else {
      alert("Login failed: " + data.message);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <h1 className="text-center mb-4">Inventario de Sistemas Petrocasinos</h1>
      <div className="card shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <form className="card-body p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              aria-describedby="usernameHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pinInput" className="form-label">
              PIN
            </label>
            <input
              type="password"
              className="form-control"
              id="pinInput"
              value={pin}
              onChange={handlePinChange}
              inputMode="numeric"
              autoComplete="off"
              maxLength={4}
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary disabled">
              Entrar
            </button>
          </div>

          <div className="d-flex flex-column align-items-center gap-2">
            <Link
              to="#"
              className="text-decoration-none"
              onClick={(e) => e.preventDefault()}
            >
              ¿Olvidaste tu PIN?
            </Link>

            <Link to="/register" className="text-decoration-none">
              ¿No tienes cuenta? Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
