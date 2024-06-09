import PropTypes from "prop-types";

const Email = ({ emailText }) => {
  return (
    <>
      <h6 className="texto">{emailText}</h6> {}
    </>
  );
};

Email.propTypes = {
  emailText: PropTypes.string.isRequired,
};

export default Email;
