import React, {Component} from 'react';
import { Modal, Button, Text, View, StyleSheet  } from 'react-native';
import AddPlantForm from './AddPlantForm';

export default class AddPlant extends Component {

  constructor(props){
    super(props);
    this.state = {modalVisible: false};
  }

  componentDidMount(){
    
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return(
        
        <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          <View>
              <AddPlantForm/>
          <Button style={styles.button} title='Close' onPress={() => {
                  this.setModalVisible(false);
                }}>Close</Button>
            </View>
          </Modal>
            <Button style={styles.button} title='Add' onPress={() => {
                  this.setModalVisible(true);
                }}>Add Plant</Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 25,
        fontSize: 30
    },
    
})