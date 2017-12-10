import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'
import TextareaAutosize from 'react-autosize-textarea';


class NotificationRow extends React.Component {
   
   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.notKey, newRating)}
   onDatePickerChange = (newDate) =>   this.props.changeDate(this.props.notKey, newDate)

   render (){
      const {notKey, date, importance, title, nextAction, details, completed, toggleComplete, deleteNotification, editField} = this.props

      const notificationDoneclass = completed? 'notificationDone' : '' ;

      return (
         <tr >
           <td  className="date-column">
             <DatePicker selected={date} onChange={this.onDatePickerChange} dateFormat='DD MMM YY'/>
           </td>
           <td className="importance-column">
             <ReactStars count={5} size={19} color2={'#ffd700'} value={importance} onChange={this.onStarValueChange} />
           </td>
           <td className="title-column">
              <TextareaAutosize
              className="textarea2"

                  value = {title}
                  onChange={(e)=> editField(notKey, "title", e.target.value )}
               />
           </td>
           <td className="next-column">
              <TextareaAutosize
              className="textarea2"

                 value = {nextAction}
                 onChange={(e)=> editField(notKey, "nextAction", e.target.value )}
              />
          </td>
          <td className="details-column">
             <TextareaAutosize
             className="textarea2"

                value = {details}
                onChange={(e)=> editField(notKey, "details", e.target.value )}
             />

          </td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(notKey)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(notKey)}></span></td>
         </tr>
      )
   }
}


export default NotificationRow
