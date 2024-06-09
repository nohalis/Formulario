import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ colorAlert, textAlert }) => {
  return (
    <>
      <Alert variant={colorAlert}>{textAlert}</Alert>
    </>
  );
};

Alerta.propTypes = {
  colorAlert: PropTypes.string.isRequired,
  textAlert: PropTypes.string.isRequired,
};

export default Alerta;
