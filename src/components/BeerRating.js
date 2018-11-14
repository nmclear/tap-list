import React from 'react';
import { Rating } from 'react-native-elements';

const BeerRating = ({ size, rating, style }) => {
    return (
        <Rating
            readonly
            imageSize={size || 25}
            startingValue={rating}
            style={[{alignItems: 'center'}, style]}
        />
    )
}

export default BeerRating;