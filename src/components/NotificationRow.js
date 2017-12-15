import React from 'react'
// import 'react-datepicker/dist/react-datepicker.css'
import ReactStars from 'react-stars'
import TextareaAutosize from 'react-autosize-textarea';
import Date3 from './Date3.js'
import Date4 from './Date4.js'
import DISPLAY_MODES from '../CONSTS.js'
import {standerdizeDateToDay} from '../dateStanderdize.js'




class NotificationRow extends React.Component {

   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.notKey, newRating)}

   render (){
      const {notKey, date, importance, title, nextAction, details, completed, toggleComplete, deleteNotification,
         editField, changeDate, displayMode, titlePlaceHolder, nextActionPlaceHolder, detailsPlaceHolder} = this.props
      const notificationCompletedClass = completed? 'completed' : '' ;
      const today = standerdizeDateToDay(new Date())
      const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))

      let dateStr = null
      if (date.getTime()==today.getTime()){
         dateStr="Today"
      }
      else if (date.getTime()===tomorrow.getTime()){
         dateStr="Tomorrow"
      }
      else {

         const dateFormatOptions = {
            month:"short",
            day:"numeric"
         }
         dateStr=date.toLocaleDateString('en-US', dateFormatOptions)
      }

      return (
         <tr >
            {displayMode!=DISPLAY_MODES.NEXT.val? <td className="date-col"><span> {dateStr} </span></td> : "" }

            <td className="title-column">
              <TextareaAutosize
              className="textarea2"
              placeHolder={titlePlaceHolder}

                   value = {title}
                   onChange={(e)=> editField(notKey, "title", e.target.value )}
                   maxRows={10}
              />
            </td>
           <td className="importance-column">
             <ReactStars count={5} size={20} color2={'#00b'} value={importance} onChange={this.onStarValueChange} />
           </td>

           <td className="next-column">
              <TextareaAutosize
              className="textarea2"

                 value = {nextAction}
                 onChange={(e)=> editField(notKey, "nextAction", e.target.value )}
                 maxRows={10}
                 placeHolder={nextActionPlaceHolder}

              />
          </td>
          <td className="details-column">
             <TextareaAutosize
             className="textarea2"

                value = {details}
                onChange={(e)=> editField(notKey, "details", e.target.value )}
                maxRows={10}
                placeHolder={detailsPlaceHolder}

             />

          </td>
             <td  className="snooze-column">
               {/*<Date1 date={date} notKey={notKey} changeDate={changeDate}/>
               <Date2 */}
               <Date3 date={date} notKey={notKey} changeDate={changeDate}/>
             </td>
           <td className="done-column"><span className={"notification-done glyphicon glyphicon-ok " + notificationCompletedClass } onClick={(e)=>toggleComplete(notKey)} ></span></td>
           <td><span className="remove-column notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(notKey)}></span></td>
         </tr>
      )
   }
}


export default NotificationRow
