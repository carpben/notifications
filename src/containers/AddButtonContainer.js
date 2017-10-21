import React from 'react'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import {addNotification} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(addNotification())
    }
  }
}

const AddButtonContainer = connect()(AddButton)

export default AddButtonContainer
