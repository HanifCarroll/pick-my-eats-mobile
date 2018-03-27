import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const Review = ({ restaurant }) => {
  return (
    <Card>
      <View>
        <Text>{restaurant.name}</Text>
      </View>
    </Card>
  );
};

export default Review;
