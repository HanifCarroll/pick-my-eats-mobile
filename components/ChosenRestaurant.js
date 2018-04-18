import React, { Component } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';

const ChosenRestaurant = ({ restaurant }) => {
  const {
    imageContainerStyle,
    infoContainerStyle,
    addressContainerStyle,
    textStyle,
    ratingStyle,
    ratingContainerStyle,
    buttonStyle
  } = styles;

  const {
    name,
    rating,
    review_count,
    price,
    location,
    image_url,
    url
  } = restaurant;

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
      <View style={buttonStyle}>
        <Button title="View Restaurant" onPress={() => Linking.openURL(url)} />
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
  },
  buttonStyle: {
    alignItems: 'center',
    marginTop: 20
  }
};

export default ChosenRestaurant;
