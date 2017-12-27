import React from 'react';
import DayPicker from 'react-day-picker';
import onClickOutside from 'react-onclickoutside';
import {momentObjToStr} from '../functions.js'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

const DayPickerW = ({dateStr, date, changeDate, hideDisplay, notKey}) =>{
   const dateObj = new Date(dateStr)

  const handleDayClick = (dateObj) => {
     const dateStr = momentObjToStr(moment(dateObj))
     console.log("dateStr is ", dateStr)
     changeDate(notKey, dateStr)
  }
  const handleClickOutside = () => {
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

export default onClickOutside(DayPickerW)
