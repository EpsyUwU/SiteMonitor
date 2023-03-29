import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    fecha_nacimiento: "",
    username: ""
  });
  const navigate = useNavigate();
  const onSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nombre: user.nombre,
      apellido_materno: user.apellido_materno,
      apellido_paterno: user.apellido_paterno,
      fecha_nacimiento: user.fecha_nacimiento,
      email: user.email,
      password: user.password,
      username: user.username
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("localhost:3000/api/checkroom/user/Register", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result), navigate("/Home"))
      .catch((error) => console.log("error", error));
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    <div className="container-fluid text-center">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image" />

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container  text-center">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Monitor S</h3>
                    <p className="text-muted mb-4">Medidas para su seguridad</p>
                    <form
                      method="POST"
                      onSubmit={onSubmit}
                      autoComplete={"off"}
                    >
                      <div className="mb-3">
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          placeholder="Nombre"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="apellido_materno"
                          name="apellido_materno"
                          type="text"
                          placeholder="Apellido materno"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="apellido_paterno"
                          name="apellido_paterno"
                          type="text"
                          placeholder="Apellido paterno"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="fecha_nacimiento"
                          name="fecha_nacimiento"
                          type="date"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Username"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Correo Electronico"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Contraseña"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="d-grid gap-2 ">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Crear Cuenta
                        </button>
                      </div>
                    </form>
                    <div className="Btn_Registro mt-3">
                      <p>¿Ya tienes una cuenta?</p>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          onClick={() => navigate("/")}
                          className="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
