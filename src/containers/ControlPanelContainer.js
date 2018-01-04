import React from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import '../styles/ControlPanel.css'
import {connect} from 'react-redux'
import {setDisplayMode, addNewNotification, refreshNotsDisplay} from '../actions'
import DISPLAY_MODES from '../CONSTS';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  marginRight: 20,
  color: 'white',
  fontSize:40
};

const ControlPanel = (props) => {

   const displayModesArr = Object.values(DISPLAY_MODES)
   const toggleButtons = displayModesArr.map(
      modeObj => (
         <ToggleButton key={modeObj.val} value={modeObj.val}>
            {modeObj.text}
         </ToggleButton>
      )
   )

   return (
      <section className = "inner-w ControlPanel">
         <div className = "flex-w">
         <FloatingActionButton style={style} backgroundColor="green" onClick={props.addNewNotification}>
            +
         </FloatingActionButton>
            <ButtonToolbar>
               <ToggleButtonGroup className="display-control" bsSize="large" type="radio" name="options" value={props.displayMode} onChange={(val) => props.setDisplayMode(val)} onClick={props.onlyRefreshNotsDisplay}>
               {/*}   <ToggleButton value={0}>
                     Next
                  </ToggleButton>
                  <ToggleButton value={1}>This Week</ToggleButton>

                  <ToggleButton value={2}>All</ToggleButton>
                  <ToggleButton value={3}>Done</ToggleButton>*/}
                  {toggleButtons}
               </ToggleButtonGroup>
            </ButtonToolbar>


         </div>

      </section>
   )
}


const mapDispatchToProps = dispatch => ({
   setDisplayMode: val => {
      dispatch(setDisplayMode(val))
   },
   onlyRefreshNotsDisplay: () => dispatch(refreshNotsDisplay()) ,
   addNewNotification: () => {
     dispatch(addNewNotification())
   },
})

const mapStateToProps = (state) => ({
   displayMode:state.display.displayMode
})

const ControlPanelContainer = connect (mapStateToProps, mapDispatchToProps)(ControlPanel)

export default ControlPanelContainer
