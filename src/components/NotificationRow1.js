import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'
import Textarea from "react-textarea-autosize";


class NotificationRow extends React.Component {
   constructor (props){
      super (props)
   }

   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.id, newRating)}
   onDatePickerChange = (newDate) =>   this.props.changeDate(this.props.id, newDate)

   render (){
      const {id, date, importance, title, nextAction, details, completed, toggleComplete, deleteNotification, editField} = this.props

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
              <Textarea
              className="textarea1"
                  value = {title}
                  onChange={(e)=> editField(id, "title", e.target.value )}
               />
           </td>
           <td className="next-column">
              <Textarea
              className="textarea1"

                 value = {nextAction}
                 onChange={(e)=> editField(id, "nextAction", e.target.value )}
              />
          </td>
          <td className="details-column">
             <Textarea
             className="textarea1"

                value = {details}
                onChange={(e)=> editField(id, "details", e.target.value )}
             />

          </td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(id)}></span></td>
         </tr>
      )
   }
}


export default NotificationRow
