import PropTypes from 'prop-types';

export const propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export const defaultProps = {
  onClick: () => {},
  disabled: false,
};
