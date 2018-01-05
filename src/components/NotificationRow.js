import React from 'react'
import ReactStars from 'react-stars'
import TextareaAutosize from 'react-autosize-textarea';
import Date3 from './Date3.js'
import DISPLAY_MODES from '../CONSTS.js'
import moment from 'moment'
import PropTypes from 'prop-types';


class NotificationRow extends React.Component {

   onStarValueChange = (newRating) => {this.props.changeImportance(this.props.notKey, newRating)}

   render (){
      const {notKey, dateStr, importance, title, nextAction, details, completed, toggleComplete, deleteNotification,
         editField, changeDate, displayMode, titlePlaceHolder, nextActionPlaceHolder, detailsPlaceHolder} = this.props
      const notificationCompletedClass = completed? 'completed' : '' ;
      const today = moment().format("YYYY-MM-DD")
      const tomorrow  = moment(new Date()).add(1,'days').format("YYYY-MM-DD");
      const yesterday  = moment(new Date()).add(1,'days').format("YYYY-MM-DD");

      let dayStr = null
      if (dateStr===today){
         dayStr="Today"
      }
      else if (dateStr===tomorrow){
         dayStr="Tomorrow"
      }
      else {
         dayStr=moment(dateStr).format("MMM D")
      }

      return (
         <tr >
            {displayMode!==DISPLAY_MODES.NEXT.val? <td className="date-col"><span> {dayStr} </span></td> : null }
            <td className="title-column">
              <TextareaAutosize
              className="textarea2"
              placeholder={titlePlaceHolder}
                   value = {title}
                   onChange={(e)=> editField(notKey, "title", e.target.value )}
                   maxRows={14}
              />
            </td>
            <td className="importance-column">
              <ReactStars count={5} size={20} color2={'#00b'} value={importance} onChange={this.onStarValueChange} />
            </td>
            <td  className="snooze-column">
             <Date3 dateStr={dateStr} notKey={notKey} changeDate={changeDate}/>
            </td>
          <td className="done-column"><span className={"notification-done glyphicon glyphicon-ok " + notificationCompletedClass } onClick={(e)=>toggleComplete(notKey)} ></span></td>
          <td><span className="remove-column notification-remove glyphicon glyphicon-remove" onClick={(e)=>deleteNotification(notKey)}></span></td>
           <td className="next-column">
              <TextareaAutosize
              className="textarea2"
                 value = {nextAction}
                 onChange={(e)=> editField(notKey, "nextAction", e.target.value )}
                 maxRows={14}
                 placeholder={nextActionPlaceHolder}
              />
          </td>
          <td className="details-column">
             <TextareaAutosize
             className="textarea2"
                value = {details}
                onChange={(e)=> editField(notKey, "details", e.target.value )}
                maxRows={14}
                placeholder={detailsPlaceHolder}
             />
          </td>
         </tr>
      )
   }
}
NotificationRow.propTypes = {
   dateStr:PropTypes.string.isRequired,
   notKey:PropTypes.string.isRequired,
   importance:PropTypes.number.isRequired,
   title:PropTypes.string,
   nextAction:PropTypes.string,
   details:PropTypes.string,
   completed:PropTypes.bool.isRequired,
   toggleComplete:PropTypes.func.isRequired,
   deleteNotification:PropTypes.func.isRequired,
   editField:PropTypes.func.isRequired,
   changeDate:PropTypes.func.isRequired,
   changeImportance:PropTypes.func.isRequired,
   displayMode:PropTypes.number.isRequired,
   titlePlaceHolder: PropTypes.string,
   nextActionPlaceHolder:PropTypes.string,
   detailsPlaceHolder:PropTypes.string
}


export default NotificationRow
