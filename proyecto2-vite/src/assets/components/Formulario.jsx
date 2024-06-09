import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "../components/Alerta";

const Formulario = ({ handleAlerta }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ message: "", color: "" });

  const submit = (event) => {
    event.preventDefault();
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      handleAlerta("danger", "Completa todos los campos !");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      handleAlerta(
        "danger",
        "El correo electrónico no tiene un formato válido"
      );
      return;
    }

    if (password !== confirmPassword) {
      handleAlerta("danger", "Las contraseñas no coinciden");
      return;
    }

    const contraseñaValida = verificarContraseña(password);
    if (!contraseñaValida) {
      handleAlerta(
        "danger",
        "La contraseña debe tener al menos 8 caracteres, un carácter especial, una letra mayúscula, una letra minúscula y un número."
      );
      return;
    }

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    handleAlerta("success", "Formulario enviado");
  };

  const verificarContraseña = (contraseña) => {
    const longitudMinima = 8;
    const tieneCaracterEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      contraseña
    );
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneMinuscula = /[a-z]/.test(contraseña);
    const tieneNumero = /[0-9]/.test(contraseña);

    return (
      contraseña.length >= longitudMinima &&
      tieneCaracterEspecial &&
      tieneMayuscula &&
      tieneMinuscula &&
      tieneNumero
    );
  };

  return (
    <>
      <Form onSubmit={submit} className="formulario">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Form.Group>
        <Button className="buttonStyle" variant="success" type="submit">
          Registrarse
        </Button>
        {show && <Alerta colorAlert={alert.color} textAlert={alert.message} />}
      </Form>
    </>
  );
};

export default Formulario;
