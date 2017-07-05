import React, { Component } from 'react'
import { Button, Keyboard } from 'react-native'
import NewJrnl from '../components/NewJrnl'



export default class NewJrnlScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation

    handlePress = () => {
      Keyboard.dismiss()
      goBack()
    }


    return {
      title: 'Create New Jrnl',
      headerRight: <Button title="Save" onPress={handlePress}/>
    }
  }

  render(){
    return (
      <NewJrnl/>
    )
  }
}
