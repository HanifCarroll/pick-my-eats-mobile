import React, { Component } from "react";
import { View, Text, StyleSheet, Switch, Slider } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import CheckBox from "react-native-checkbox";
import { connect } from "react-redux";

import * as actions from "../actions";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Utils";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  render() {
    const {
      contentContainerStyle,
      cardStyle,
      itemContainerStyle,
      itemStyle,
      priceContainerStyle
    } = styles;

    return (
      <Container>
        <Content contentContainerStyle={contentContainerStyle}>
          <Card style={cardStyle}>
            <CardItem>
              <View style={itemContainerStyle}>
                <View style={itemStyle}>
                  <Text>Search Radius</Text>
                  <Text>{`${this.props.query.radius} Miles`}</Text>
                </View>
                <Slider
                  value={this.props.query.radius}
                  onValueChange={value =>
                    this.props.updateQuery({ prop: "radius", value })
                  }
                  maximumValue={25}
                  minimumValue={1}
                  step={1}
                />
              </View>
            </CardItem>
            <CardItem>
              <View style={itemContainerStyle}>
                <View style={itemStyle}>
                  <Text>Max # of Results</Text>
                  <Text>{this.props.query.resultsLimit}</Text>
                </View>
                <Slider
                  value={this.props.query.resultsLimit}
                  onValueChange={value =>
                    this.props.updateQuery({ prop: "resultsLimit", value })
                  }
                  maximumValue={50}
                  minimumValue={1}
                  step={1}
                />
              </View>
            </CardItem>

            <CardItem>
              <View style={priceContainerStyle}>
                <View style={itemStyle}>
                  <Text>Price Range</Text>
                  <View>
                    <CheckBox
                      label="$"
                      checked={this.props.query.price1}
                      onChange={value =>
                        this.props.updateQuery({
                          // For some reason this only works if you do !value, otherwise it won't change
                          prop: "price1",
                          value: !value
                        })
                      }
                    />
                    <CheckBox
                      label="$$"
                      checked={this.props.query.price2}
                      onChange={value =>
                        this.props.updateQuery({
                          prop: "price2",
                          value: !value
                        })
                      }
                    />
                    <CheckBox
                      label="$$$"
                      checked={this.props.query.price3}
                      onChange={value =>
                        this.props.updateQuery({
                          prop: "price3",
                          value: !value
                        })
                      }
                    />
                    <CheckBox
                      label="$$$$"
                      checked={this.props.query.price4}
                      onChange={value =>
                        this.props.updateQuery({
                          prop: "price4",
                          value: !value
                        })
                      }
                    />
                  </View>
                </View>
              </View>
            </CardItem>

            <CardItem>
              <View style={itemContainerStyle}>
                <View style={itemStyle}>
                  <Text>Only Show Open Restaurants</Text>
                  <Switch
                    value={this.props.query.openNow}
                    onValueChange={value =>
                      this.props.updateQuery({ prop: "openNow", value })
                    }
                  />
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "center"
  },
  cardStyle: {
    width: SCREEN_WIDTH * 0.85,
    alignItems: "flex-end"
  },
  itemContainerStyle: {
    flex: 1,
    height: SCREEN_HEIGHT / 8,
    justifyContent: "space-around"
  },
  openContainerStyle: {
    height: SCREEN_HEIGHT / 10,
    justifyContent: "space-around"
  },
  priceContainerStyle: {
    flex: 1,
    height: SCREEN_HEIGHT / 8,
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 15
  },
  itemStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const mapStateToProps = state => ({
  query: state.query
});

export default connect(mapStateToProps, actions)(SettingsScreen);
