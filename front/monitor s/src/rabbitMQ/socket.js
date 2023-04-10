import SockJS from "sockjs-client";
import { over } from "stompjs";


var stompClient = null; //variable donde se guarda la conexion del websocket

const URI = "http://localhost:8080" // URI de la API GATEWAT

const connect = () => { // esta funcion conecta al websocket
  let sock = new SockJS(URI + "/ws");
  stompClient = over(sock); // aqui se guarda la conexioon en una variable
  stompClient.connect({}, onConnected, onError); //aqui se conecta
};

const onConnected = () => { // esta funcion avisa cuando se conecto al websocket
  console.log("[INFO] - stomp conected");
};

const onError = (e) => { //esta funcion suelta alerta de errores a la hora de que ocurra un error con la conexion
  console.log(e);
};

const login = () => { //esta funcion manda el mensaje 
  logInRequest({
    email: "sr.conejo.uwu@gmail.com",
    password: "password"
  })  
  stompClient.send("/ag/get-report-admin", {}, JSON.stringify(logInRequest)); //aqui se manda el mensaje
}