import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Registro from "./assets/components/Registro";
import Alerta from "./assets/components/Alerta";
import "./App.css";

function App() {
  const [alert, setAlert] = useState({
    message: "",
    color: "",
    show: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro setAlertMessage={addAlert} /> {}
      {alert.show && (
        <Alerta colorAlert={alert.color} textAlert={alert.message} />
      )}{" "}
      {}
    </>
  );
}

export default App;
