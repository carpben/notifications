import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'
import TextareaAutosize from 'react-autosize-textarea';
import Date3 from './Date3.js'
import Date4 from './Date4.js'


class NotificationRow extends React.Component {

   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.notKey, newRating)}

   render (){
      const {notKey, date, importance, title, nextAction, details, completed, toggleComplete, deleteNotification, editField, changeDate} = this.props

      const notificationCompletedClass = completed? 'completed' : '' ;


      return (
         <tr >
            <td className="title-column">
              <TextareaAutosize
              className="textarea2"

                   value = {title}
                   onChange={(e)=> editField(notKey, "title", e.target.value )}
                   maxRows={10}
              />
            </td>
           <td className="importance-column">
             <ReactStars count={5} size={19} color2={'#ffd700'} value={importance} onChange={this.onStarValueChange} />
           </td>

           <td className="next-column">
              <TextareaAutosize
              className="textarea2"

                 value = {nextAction}
                 onChange={(e)=> editField(notKey, "nextAction", e.target.value )}
                 maxRows={10}
              />
          </td>
          <td className="details-column">
             <TextareaAutosize
             className="textarea2"

                value = {details}
                onChange={(e)=> editField(notKey, "details", e.target.value )}
                maxRows={10}
             />

          </td>
             <td  className="date-column">
               {/*<Date1 date={date} notKey={notKey} changeDate={changeDate}/>
               <Date2 */}
               <Date4 date={date} notKey={notKey} changeDate={changeDate}/>
             </td>
           <td><span className={"notification-done glyphicon glyphicon-ok " + notificationCompletedClass } onClick={(e)=>toggleComplete(notKey)} ></span></td>
           <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(notKey)}></span></td>
         </tr>
      )
   }
}


export default NotificationRow
