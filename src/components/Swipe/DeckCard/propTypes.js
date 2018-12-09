import PropTypes from 'prop-types';

export const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    brewery: PropTypes.shape({
      id: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    uri: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export const defaultProps = {};
