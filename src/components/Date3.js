import React, {Component} from 'react';
import DayPickerW from './DayPickerW.js'

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
   changeDate = (notKey, date) => {
      this.setState({displayDayPicker:false})
      this.props.changeDate(notKey, date)
   }

   render () {
      const dayIcon1 = <span className="glyphicon glyphicon-calendar" onClick={this.showDisplay} ></span>
      const dayIcon2 = <span onClick={this.showDisplay}> <i className="fa fa-calendar" aria-hidden="true"></i> </span>


      return (
         <div className="date3">
            {dayIcon2}
            {this.state.displayDayPicker?
               <DayPickerW changeDate={this.changeDate} notKey={this.props.notKey} date={this.props.date}  className="day-picker-w" /> : ""
            }
         </div>)
   }
}

export default Date3
