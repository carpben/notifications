import React from 'react'
import AddButtonContainer from '../containers/AddButtonContainer'
import UpdateButtonContainer from '../containers/UpdateButtonContainer'


const ControlPanel = () => (
    <div style={{margin:"20px 0"}}>
        <AddButtonContainer />
        <UpdateButtonContainer />
    </div>
)

export default ControlPanel
