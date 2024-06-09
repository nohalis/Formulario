import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function SocialButton({ button }) {
  return (
    <>
      <Button variant="outline-dark rounded-circle p-3 m-2">
        <i className={`fa-brands ${button} fa-xl`}></i>
      </Button>
    </>
  );
}

SocialButton.propTypes = {
  button: PropTypes.string.isRequired,
};

export default SocialButton;
