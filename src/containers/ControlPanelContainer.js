import React from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'
import '../styles/ControlPanel.css'
import {connect} from 'react-redux'
import {setDisplayMode, addNewNotification} from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs';
import DISPLAY_MODE from '../CONSTS';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
  color: 'white',
  fontSize:40
};

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

            <FloatingActionButton style={style} backgroundColor="green" onClick={props.addNewNotification}>
               +
            </FloatingActionButton>
         </div>

      </section>
   )
}


const mapDispatchToProps = dispatch => ({
   setDisplayMode: val => {
      dispatch(setDisplayMode(val))
   },
   addNewNotification: () => {
     dispatch(addNewNotification())
   },
})

const mapStateToProps = (state) => ({
   displayMode:state.display.notificationsMode
})

const ControlPanelContainer = connect (mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer
