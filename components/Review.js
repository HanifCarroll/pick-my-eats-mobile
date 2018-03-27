import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const Review = ({ review }) => {
  return (
    <Card>
      <View>
        <Text>{review.text}</Text>
      </View>
    </Card>
  );
};

export default Review;
