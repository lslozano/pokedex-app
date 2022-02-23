import PropTypes from 'prop-types';

export const propTypes = {
  pokemons: PropTypes.object.isRequired,
  filteredPokemons: PropTypes.object.isRequired,
  setFilteredPokemons: PropTypes.func.isRequired,
};
