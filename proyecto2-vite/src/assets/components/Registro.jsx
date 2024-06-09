import { useState } from "react";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Alerta from "../components/Alerta";
import SocialButton from "../components/SocialButton";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = ({ setAlertMessage }) => {
  const [alerta, setAlerta] = useState({ colorAlert: "", textAlert: "" });

  const handleAlerta = (color, texto) => {
    setAlerta({ colorAlert: color, textAlert: texto });
    setAlertMessage({ message: texto, color: color, show: true });
  };

  return (
    <div className="cardStyle">
      <Header textTitle="Crea una cuenta" />
      <div className="iconStyle">
        <SocialButton button={"fa-facebook"} />
        <SocialButton button={"fa-github"} />
        <SocialButton button={"fa-linkedin"} />
      </div>
      <Formulario handleAlerta={handleAlerta} />
      <Alerta colorAlert={alerta.colorAlert} textAlert={alerta.textAlert} />
    </div>
  );
};

export default Registro;
