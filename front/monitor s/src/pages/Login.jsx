import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
    const [user, setUser] = useState({
        UserName: "",
        password: "",
      });
  const navigate = useNavigate();

  const onSubmit = () => {
      console.log(user.email)
      console.log( user.password)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": user.UserName,
      "password": user.password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("localhost:3000/api/checkroom/user/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result), navigate('/Home'))
      .catch(error => console.log('error', error));
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
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Correo Electronico"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
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
                      <br />
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Iniciar Sesion
                        </button>
                      </div>
                    </form>
                    <div className="Btn_Registro mt-5">
                      <p>¿Eres nuevo en Monitor S?</p>
                      <div className="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          className="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={() => navigate("/Register")}
                        >
                          Crear Cuenta
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
