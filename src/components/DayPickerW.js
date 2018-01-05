import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import onClickOutside from 'react-onclickoutside';
import {momentObjToStr} from '../functions.js'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

class DayPickerW extends Component {
   // constructor (props) {
   //    super(props)
   // }
   handleDayClick = (dateObj) => {
      const dateStr = momentObjToStr(moment(dateObj))
      this.props.changeDate(this.props.notKey, dateStr)
   }
   handleClickOutside = (ev) => {
      this.props.hideDisplay()
   }
   render (){
      const dateObj = new Date(this.props.dateStr)

      return (
         <div className="day-picker-w">
         <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={dateObj}
         />
         </div>
       );
}

  }

DayPickerW.propTypes = {
   dateStr:PropTypes.string.isRequired,
   changeDate:PropTypes.func.isRequired,
   hideDisplay:PropTypes.func.isRequired,
   notKey:PropTypes.string.isRequired
}

export default onClickOutside(DayPickerW)
