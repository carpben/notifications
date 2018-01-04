import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import onClickOutside from 'react-onclickoutside';
import {momentObjToStr} from '../functions.js'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

const DayPickerW = ({dateStr, changeDate, hideDisplay, notKey}) =>{
   const dateObj = new Date(dateStr)

  const handleDayClick = (dateObj) => {
     const dateStr = momentObjToStr(moment(dateObj))
     console.log("dateStr is ", dateStr)
     changeDate(notKey, dateStr)
  }
  this.handleClickOutside = (ev) => {
     hideDisplay()
 }
 console.log("dateObj is " , dateObj)
    return (
      <div className="day-picker-w">
        <DayPicker
          onDayClick={handleDayClick}
          selectedDays={dateObj}
        />
      </div>
    );
  }

DayPickerW.propTypes = {
   dateStr:PropTypes.string.isRequired,
   changeDate:PropTypes.func.isRequired,
   hideDisplay:PropTypes.func.isRequired,
   notKey:PropTypes.string.isRequired
}

export default onClickOutside(DayPickerW)
