import React, { useState, useEffect, useContext } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [email, setEmail] = useState({
    "to": "",
    "subject": "",
    "body":""
  });

  function sendEmail(e) {
    e.preventDefault();
    console.log("Hola desde sendEmail");
    console.log(email);
    fetch("http://127.0.0.1:5000/enviarCorreo", {
					method: "POST",
					body: JSON.stringify(email)
				})
					// .then(res => res.json())
					// .then(data => {
					// 	setStore({ usuarioActual: [data.nombre, data.correo] });
					// 	setStore({ ingreso: ["uno"] });
					// }
					// ).catch(error => {
					// 	console.error("Hay un problemilla", error);
					// }
					// )
  }
  

  // async function sendEmail(e, url = "127.0.0.1:5000/enviarCorreo", data = email) {
  //   e.preventDefault();
  //   console.log(email);

  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   console.log("Hola desde createData");
  //   return response.json();
  // }

  return (
    <div className="App">
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Para:</label>
            <input type="email" onChange={(e) => setEmail({ ...email, to: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Asunto</label>
            <input type="text" onChange={(e) => setEmail({ ...email, subject: e.target.value })} className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contenido</label>
            <input type="text" onChange={(e) => setEmail({ ...email, body: e.target.value })} className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="buton" className="btn btn-primary" onClick={sendEmail}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
