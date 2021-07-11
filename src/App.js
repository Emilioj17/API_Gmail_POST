import React, { useState, useEffect, useContext } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [email, setEmail] = useState({
    "Para": "",
    "Asunto": "",
    "Contenido":""
  });

  async function sendEmail(e, url = "", data = {}) {
    e.preventDefault();
    console.log(email);
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // });
    // console.log("Hola desde createData");
    // return response.json();
  }

  return (
    <div className="App">
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Para:</label>
            <input type="email" onChange={(e) => setEmail({ ...email, Para: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Asunto</label>
            <input type="text" onChange={(e) => setEmail({ ...email, Asunto: e.target.value })} className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Contenido</label>
            <input type="text" onChange={(e) => setEmail({ ...email, Contenido: e.target.value })} className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="buton" className="btn btn-primary" onClick={sendEmail}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
