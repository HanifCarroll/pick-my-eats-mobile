import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';

const Review = ({ review }) => {
  const { text, rating, user, url } = review;
  const { infoStyle, textStyle, buttonContainerStyle, ratingStyle } = styles;

  return (
    <Card>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 5 }}
            source={{ uri: user.image_url }}
          />
          <View style={infoStyle}>
            <Text>{user.name}</Text>
            <Rating
              style={ratingStyle}
              readonly
              imageSize={20}
              startingValue={rating}
            />
          </View>
        </View>
        <View style={textStyle}>
          <Text>{text}</Text>
        </View>
        <View style={buttonContainerStyle}>
          <Button
            backgroundColor="#99b6e5"
            title="Read more!"
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  infoStyle: { marginLeft: 15 },
  textStyle: { marginTop: 10 },
  buttonContainerStyle: { marginTop: 15, justifyContent: 'center' },
  ratingStyle: { marginTop: 5 }
};

export default Review;
