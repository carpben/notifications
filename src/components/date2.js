import React from 'react'
import moment from 'moment';
import DatePicker from 'react-date-picker';

const CalendarIcon = () => (
   <span className="glyphicon glyphicon-calendar" ></span>
)

const Date1 = (props) => {
   const onDatePickerChange = (newDate) =>   {
      console.log("onDatePickerChange runs")
      props.changeDate(props.notKey, newDate)
   }

   if (props.date){return <DatePicker value={props.date} onChange={onDatePickerChange}  />}
   return <DatePicker onChange={onDatePickerChange} isOpen={true} calendarIcon={ <CalendarIcon /> }/>;
}


export default Date1

//{/*dateFormat='DD MMM YY'*/}
