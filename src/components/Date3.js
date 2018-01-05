import React, {Component} from 'react';
import DayPickerW from './DayPickerW.js';
import PropTypes from 'prop-types';


class Date3 extends Component {
   constructor (props) {
      super (props)
      this.state = {
         displayDayPicker: false
      }
   }
   showDisplay = () => {
      this.setState({displayDayPicker:true})
   }
   hideDisplay = () => {
      this.setState({displayDayPicker:false})
   }
   changeDate = (notKey, dateStr) => {
      this.setState({displayDayPicker:false})
      this.props.changeDate(notKey, dateStr)
   }

   render () {
      const dayIcon = <span onClick={this.showDisplay}> <i className="fa fa-calendar" aria-hidden="true"></i> </span>
      return (
         <div className="date3">
            {dayIcon}
            {this.state.displayDayPicker?
               <DayPickerW changeDate={this.changeDate} notKey={this.props.notKey} dateStr={this.props.dateStr} hideDisplay={this.hideDisplay}  className="day-picker-w" /> : ""
            }
         </div>)
   }
}

Date3.propTypes = {
   dateStr:PropTypes.string.isRequired,
   changeDate:PropTypes.func.isRequired,
   notKey:PropTypes.string.isRequired
}

export default Date3
