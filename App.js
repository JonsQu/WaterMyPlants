/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal, Button,Platform, StyleSheet, Text, View} from 'react-native';
import Plants from './Plants';
import AddPlantForm from './AddPlantForm';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {modalVisible: false};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Plants/>
        <View >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          <View>
              <AddPlantForm/>
          <Button style={styles.button} title='Close' onPress={() => {
                  this.setState({modalVisible: false});
                }}>Close</Button>
            </View>
          </Modal>
            <Button style={styles.button} title='Add' onPress={() => {
                  this.setState({modalVisible: true});
                }}>Add Plant</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
},
button: {
    backgroundColor: 'green',
    borderRadius: 25,
    fontSize: 30
},
});
