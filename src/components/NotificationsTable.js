import React from 'react'
import NotificationRow1 from './NotificationRow1.js'
import NotificationRow2 from './NotificationRow2.js'
import '../styles/NotificationTable.css'


const NotificationsTable = ({notifications, addNotification, refreshTable, toggleComplete, deleteNotification, editField, changeImportance, changeDate, user}) => (
   <div>

        <table className="table NotificationsTable">
        <thead>
         <tr>
           <th className="date-column">Date</th>
           <th className="importance-column">Importance</th>
           <th className="title-column">Title</th>
           <th className="next-column">Next Action</th>
           <th className="details-column">More Details</th>
           <th className="icon-1-column"><span className="notification-add glyphicon glyphicon-plus" onClick={()=>addNotification(user.uid)}></span></th>
           <th className="icon-2-column"><span className="table-refresh glyphicon glyphicon-refresh" onClick={refreshTable}></span></th>
         </tr>
        </thead>
        <tbody>

         {

             notifications.map(
                 (notification) => <NotificationRow1 key={notification.notKey} {...notification} toggleComplete={toggleComplete} deleteNotification={deleteNotification} editField={editField} changeImportance={changeImportance} changeDate={changeDate}/>
             )
         }
        </tbody>
        </table>

        <table className="table NotificationsTable">

        <thead>
         <tr>
           <th className="date-column">Date</th>
           <th className="importance-column">Importance</th>
           <th className="title-column">Title</th>
           <th className="next-column">Next Action</th>
           <th className="details-column">More Details</th>
           <th className="icon-1-column"><span className="notification-add glyphicon glyphicon-plus" onClick={addNotification}></span></th>
           <th className="icon-2-column"><span className="table-refresh glyphicon glyphicon-refresh" onClick={refreshTable}></span></th>
         </tr>
        </thead>
        <tbody>
         {
             notifications.map(
                 (notification) => <NotificationRow2 key={notification.notKey} {...notification} toggleComplete={toggleComplete} deleteNotification={deleteNotification} editField={editField} changeImportance={changeImportance} changeDate={changeDate}/>
             )
         }
        </tbody>
        </table>


   </div>
    )

export default NotificationsTable
