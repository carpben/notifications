import React from 'react'
import moment from 'moment';
import DatePicker from 'react-datepicker';


const Date1 = (props) => {
   const onDatePickerChange = (newDate) =>   {
      console.log("onDatePickerChange runs")
      props.changeDate(props.notKey, newDate)
   }

   if (props.date){return <DatePicker selected={props.date} onChange={onDatePickerChange} dateFormat='DD MMM YY'/>}
   return <DatePicker onChange={onDatePickerChange} />;
}


export default Date1
