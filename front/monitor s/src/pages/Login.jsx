import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function SignIn() {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  
    fetch(`https://monitors.hopto.org:3000/api/monitors/user/login/${user.username}/${user.password}`)
      .then(response => response.json())
      .then(result => {
        if(result.message){
          alert("usuario no encontrado por favor intentelo de nuevo");
        }else{
          localStorage.setItem("token", result.data.token);
          navigate('/Home');
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleChange = ({ target: { value, name } }) =>
  setUser({ ...user, [name]: value });

  return (
    <div className="container-fluid text-center">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image" />

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container  text-center">
                <div className="row maxoo">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Monitor S</h3>
                    <p className="text-muted mb-4">Medidas para su seguridad</p>
                    <form
                      method="GET"
                      onSubmit={onSubmit}
                      autoComplete={"off"}
                    >
                      <div className="mb-3">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="username"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="password"
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
  );
}
