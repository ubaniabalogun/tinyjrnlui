import React, { Component } from 'react'
import { View,Text, StyleSheet, FlatList, TouchableHighlight, Alert } from 'react-native'


const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 50,
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  text: {
    fontSize: 20
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    'alignItems': 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderStyle: 'solid',
    'borderColor': 'black',
    'borderWidth': 1
  },
  list: {
    flex: 1
  }
})




export function JrnlListCount({count}){
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

function JrnlListText({text}){
  return (
    <Text style={styles.text}>{text}</Text>
  )
}


function JrnlListItem({item}){
  let {text, count } = item
  let _onPress = () => {
    Alert.alert('Hello',`From: ${text}`)
  }
  return (
    <TouchableHighlight onPress={_onPress} >
      <View style={styles.item}>
        <JrnlListText text={text}/>
        <JrnlListCount count={count}/>
      </View>
    </TouchableHighlight>

  )
}

export default class JrnlList extends Component {

  _renderItem({item, index}){
    return (
      <JrnlListItem item={item}/>
    )
  }

  render(){
    let { data } = this.props
    return (
      <View style={styles.list} >
        <FlatList
          data={data}
          keyExtractor={ item => item.id }
          renderItem={this._renderItem} />
      </View>

    )
  }



}