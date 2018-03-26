import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Card, Rating } from 'react-native-elements';

const ChosenRestaurant = ({ restaurant }) => {
  const {
    imageContainerStyle,
    infoContainerStyle,
    addressContainerStyle,
    textStyle,
    ratingStyle,
    ratingContainerStyle
  } = styles;

  const { name, rating, review_count, price, location, image_url } = restaurant;

  return (
    <Card title={name}>
      <View style={imageContainerStyle}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 5 }}
          source={{ uri: image_url }}
        />
      </View>
      <View style={infoContainerStyle}>
        <Rating
          imageSize={20}
          readonly
          startingValue={rating}
          style={ratingStyle}
        />
        <Text style={textStyle}>{review_count} Reviews</Text>
        <Text style={textStyle}>{price}</Text>
        <Text style={textStyle}>{location.address1}</Text>
      </View>
    </Card>
  );
};

const styles = {
  imageContainerStyle: {
    alignItems: 'center'
  },
  infoContainerStyle: {},
  addressContainerStyle: {
    marginTop: 15,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center'
  },
  ratingStyle: {
    alignItems: 'center',
    marginTop: 5
  }
};

export default ChosenRestaurant;
