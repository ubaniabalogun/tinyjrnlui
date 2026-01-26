import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import ModalWrapper from 'react-native-modal-wrapper'
import { connect } from 'react-redux'
import { saveEntry, cancelEntry, updateEntryContent } from '../actions/entryActions'

const styles = StyleSheet.create({
  modal: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  modalContainer: {
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalHeader:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    margin: 0,
    height: 50
  },
  text: {
    fontSize: 20
  }
})

function NewEntry({ title, increment, content, isVisible, onCancel, onUpdateContent }){
  return (
    <ModalWrapper
      style={styles.modal}
      containerStyle={styles.modalContainer}
      animationType="slide"
      animateOnMount={true}
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
      shouldCloseOnOverlayPress
      >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Button title="Cancel" onPress={ onCancel }/>
          <Text style={styles.text}>{ title }</Text>
          <Button title="Save" onPress={ onCancel }/>
        </View>
        <TextInput
          style={styles.input}
          value={increment}
          onChangeText={(text) => onUpdateContent('increment', text)}
          keyboardType="numeric"
          placeholder="Increment"
        />
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => onUpdateContent('content', text)}
          placeholder="Notes"
          multiline
        />
      </View>
    </ModalWrapper>
  )
}

const mapStateToProps = state => ({
  isVisible: state.entryModal.isVisible,
  title: state.entryModal.title,
  increment: state.entryModal.increment,
  content: state.entryModal.content
})

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(cancelEntry()),
  onUpdateContent: (field, value) => dispatch(updateEntryContent(field, value))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewEntry)
