/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var mutton = React.createClass({
  getInitialState: function(){
    return {pressing: false};
  },

  _onPressIn: function() {
    this.setState({pressing: true})
  },

  _onPressOut: function() {
    this.setState({pressing: false})
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Hafiz
        </Text>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}>
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.pressing ? 'Clicking' : 'Click Me'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('mutton', () => mutton);
