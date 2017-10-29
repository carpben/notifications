import React from 'react'

const NotificationRow = ({id, date, importance, title, nextAction, details, completed, toggleComplete, notificationDelete}) => {
   const notificationDoneclass = completed? 'notificationDone' : '' ;
   return (
      <tr >
        <td contentEditable="true" className="date-column">{date}</td>
        <td contentEditable="true" className="importance-column">{importance}</td>
        <td contentEditable="true" className="title-column">{title}</td>
        <td contentEditable="true" className="next-column">{nextAction}</td>
        <td contentEditable="true" className="details-column">{details}</td>
        <td><span className={"notification-done glyphicon glyphicon-ok " + notificationDoneclass } onClick={(e)=>toggleComplete(id)} ></span></td>
        <td><span className="notification-remove glyphicon glyphicon-remove" onClick={(e)=>notificationDelete(id)}></span></td>
      </tr>
   )
}

export default NotificationRow
