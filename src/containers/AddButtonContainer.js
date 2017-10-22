import React from 'react'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import {addNotification} from '../actions'

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        console.log('onClick runs')
        dispatch(addNotification())
    }
})

const AddButtonContainer = connect(null, mapDispatchToProps)(AddButton)

export default AddButtonContainer
