import React, {Component} from 'react';
import {ActivityIndicator, Button, Text, TextInput, View, StyleSheet  } from 'react-native';

export default class AddPlantForm extends Component {

  constructor(props){
    super(props);
    this.state = {
        plantName: '',
        plantDescription: '',
        isLoading: false
    };
  }

  componentDidMount(){
    
  }
  savePlant = () => {
    this.setState({isLoading: true});
    
    return fetch('https://watermyplantsbackend.herokuapp.com/plants/create', {
        method: 'POST', 
        body: JSON.stringify({
            plantName: this.state.plantName,
            plantDescription: this.state.plantDescription
        }), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
          console.log(response);
        this.setState({
            isLoading: false,
            dataSource: response,
          }, function(){
              
          });
      })
      .catch(error => console.error('Error:', error));
                
  }
  

  render(){
    if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
    return(
        
        <View style={styles.container}>
        <TextInput
            placeholder='Plant name'
            onChangeText={(plantName) => this.setState({plantName})}
            />
            <TextInput
            placeholder='Plant description'
            onChangeText={(plantDescription) => this.setState({plantDescription})}
            />
            <Button title='Save' onPress={this.savePlant}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    TextInput: {
        margin: 10
    }
    
})