import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet  } from 'react-native';

export default class Plants extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://watermyplantsbackend.herokuapp.com/plants/all', {
        method: 'POST', 
        body: JSON.stringify({}), // data can be `string` or {object}!
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
      <View style={styles.flatContainer}>
        <FlatList style={{flex: 1, paddingTop:20}}
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor = {item => item._id}
          renderItem={({item}) => 
          <View style={styles.flatview}>
          <Text style={styles.flatItem}>{item.plantName}</Text>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    flatContainer: {
        flex: 1,
        
    },
    flatview: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        margin: 5,
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    flatItem: {
        color: 'red',
        fontSize: 35,
    }
})