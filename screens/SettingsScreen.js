import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Slider,
  Dimensions
} from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import CheckBox from "react-native-checkbox";
import { connect } from "react-redux";

import * as actions from "../actions";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings",
    headerStyle: { height: 40, bottom: -10, paddingBottom: 10 }
  };

  render() {
    return (
      <Card wrapperStyle={{ top: 0 }}>
        <View style={styles.itemContainerStyle}>
          <View style={styles.itemStyle}>
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
        <Divider />
        <View style={styles.itemContainerStyle}>
          <View style={styles.itemStyle}>
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
        <Divider />
        <View style={styles.priceContainerStyle}>
          <View style={styles.itemStyle}>
            <Text>Price Range</Text>
            <View>
              <CheckBox
                label="$"
                checked={this.props.query.price1}
                onChange={value =>
                  this.props.updateQuery({ prop: "price1", value: !value })
                }
              />
              <CheckBox
                label="$$"
                checked={this.props.query.price2}
                onChange={value =>
                  this.props.updateQuery(
                    // For some reason this only works if you do !value, otherwise it won't change
                    { prop: "price2", value: !value }
                  )
                }
              />
              <CheckBox
                label="$$$"
                checked={this.props.query.price3}
                onChange={value =>
                  this.props.updateQuery({ prop: "price3", value: !value })
                }
              />
              <CheckBox
                label="$$$$"
                checked={this.props.query.price4}
                onChange={value =>
                  this.props.updateQuery({ prop: "price4", value: !value })
                }
              />
            </View>
          </View>
        </View>

        <Divider />
        <View style={styles.openContainerStyle}>
          <View style={styles.itemStyle}>
            <Text>Only Show Open Restaurants</Text>
            <Switch
              value={this.props.query.openNow}
              onValueChange={value =>
                this.props.updateQuery({ prop: "openNow", value })
              }
            />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  itemContainerStyle: {
    height: Dimensions.get("window").height / 8,
    justifyContent: "space-around"
  },
  openContainerStyle: {
    height: Dimensions.get("window").height / 10,
    justifyContent: "space-around"
  },
  priceContainerStyle: {
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
