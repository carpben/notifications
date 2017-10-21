import React from 'react'
import {Button} from 'react-bootstrap'

const AddButton = ({onClick}) => (
    <Button bsSize="large" bsStyle="success" onClick={onClick}>
        Add
    </Button>
)

export default AddButton
