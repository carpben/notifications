import React from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'
import '../styles/ControlPanel.css'
import {connect} from 'react-redux'
import {setDisplayMode} from '../actions'

const ControlPanel = (props) => {
   console.log("ControlPanel received displayMode", props.displayMode)
   return (
      <section className = "inner-w ControlPanel">
         <div className = "flex-w">
            <ButtonToolbar>
               <ToggleButtonGroup className="display-control" bsSize="large" type="radio" name="options" value={props.displayMode} onChange={(val) => props.setDisplayMode(val)}>
                  <ToggleButton value={0}>
                     Next
                  </ToggleButton>
                  <ToggleButton value={1}>This Week</ToggleButton>

                  <ToggleButton value={2}>All</ToggleButton>
                  <ToggleButton value={3}>Done</ToggleButton>
               </ToggleButtonGroup>
            </ButtonToolbar>
            <Button className="add-btn"><label>+</label></Button>
         </div>

      </section>
   )
}

const mapDispatchToProps = dispatch => ({
   setDisplayMode: val => {
      dispatch(setDisplayMode(val))
   }
})

const mapStateToProps = (state) => ({
   displayMode:state.display.notificationsMode
})

const ControlPanelContainer = connect (mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer
