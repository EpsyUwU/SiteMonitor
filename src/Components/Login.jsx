import React from "react"

export default function (props) {
    return (
            <div className="container-fluid text-center">
                <div className="container-fluid">
                    <div className="row no-gutter">

                        <div className="col-md-6 d-none d-md-flex bg-image"/>

                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">

                                <div className="container  text-center">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Monitor S</h3>
                                            <p className="text-muted mb-4">Medidas para su seguridad</p>
                                            <form>
                                                <div className="mb-3">
                                                    <input  id="email" name='email' type="email"
                                                           placeholder="Correo Electronico"
                                                           className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                </div>
                                                <div className="mb-3">
                                                    <input id="password" name='password'
                                                           type="password" placeholder="Contraseña"
                                                           className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                </div>
                                                <br/>
                                                <div className="d-grid gap-2 mt-2">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Crear Cuenta
                                                    </button>
                                                </div>


                                            </form>
                                            <div className="Btn_Registro mt-5">
                                                <p>¿Eres nuevo en Monitor S?</p>
                                                <div className="d-grid gap-2 mt-2">
                                                    <button type="submit"
                                                            className="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Crear Cuenta
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
    )
}