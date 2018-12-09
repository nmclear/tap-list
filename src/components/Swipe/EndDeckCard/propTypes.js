import { string, func } from 'prop-types';

export const propTypes = {
  title: string,
  text: string,
  yesBtnText: string,
  noBtnText: string,
  onYesPress: func.isRequired,
  onNoPress: func.isRequired,
};

export const defaultProps = {
  title: 'Tapped Keg...',
  text: 'No more beers to taste!',
  noBtnText: 'More Pints',
  yesBtnText: 'View Tap List',
};
