import React from 'react'
import NotificationRow from './NotificationRow.js'
import '../styles/NotificationTable.css'


const NotificationsTable = ({notifications, addNotification, refreshTable, toggleComplete, deleteNotification, editField, changeImportance, changeDate, user}) => (
   <div>

        <table className="table NotificationsTable">

        <thead>
         <tr>
           <th className="title-column">Title</th>
           <th className="importance-column">Importance</th>
           <th className="next-column">Next Action</th>
           <th className="details-column">More Details</th>
           <th className="date-column"></th>
           <th className="icon-1-column"></th>
           <th className="icon-2-column"><span className="table-refresh glyphicon glyphicon-refresh" onClick={refreshTable}></span></th>
         </tr>
        </thead>
        <tbody>
         {
             notifications.map(
                 (notification) => <NotificationRow key={notification.notKey} {...notification} toggleComplete={toggleComplete} deleteNotification={deleteNotification} editField={editField} changeImportance={changeImportance} changeDate={changeDate}/>
             )
         }
        </tbody>
        </table>


   </div>
    )

export default NotificationsTable
