import PropTypes from "prop-types";

const Header = ({ textTitle }) => {
  return (
    <>
      <h1 className="header">{textTitle}</h1> {}
    </>
  );
};

Header.propTypes = {
  textTitle: PropTypes.string.isRequired,
};

export default Header;
