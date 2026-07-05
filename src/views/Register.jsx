import { useState } from "react";
import { Link } from "react-router-dom";
import viteLogo from "../assets/vite.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      lastName,
      email,
      password,
    };
    console.log("Enviando los datos al backend:");
    try {
      const response = await fetch("http://localhost:5000/test/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Respuesta del backend:", result);
      if (response.ok) {
        alert("Registro exitoso!");
        // Limpiamos los campos del formulario después de enviar los datos
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
      } else {
        alert("Error en el registro: " + result.message);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
        <img
          src={viteLogo}
          alt="Logo"
          width="80"
          height="80"
          className="mb-3"
        />
        <h1 className="text-center mb-4">Usuario, regístrate aquí</h1>
        <div
          className="card shadow"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <form className="card-body p-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="nameInput"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastNameInput" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                id="lastNameInput"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <label htmlFor="emailInput" className="form-label">
              Correo
            </label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="passwordInput" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="passwordInput"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-grid mb-3 mt-3">
              <button type="submit" className="btn btn-primary disabled">
                Register
              </button>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link to="/login" className="text-decoration-none">
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
