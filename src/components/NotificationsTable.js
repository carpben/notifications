import React from 'react'
import NotificationRow from './NotificationRow.js'
import './NotificationTable.css'

// const styles = {
//     thead: {
//         "tr:border-bottom: 1px solid #555;",
//         th: "border-right: 1px dashed #555; border-left: 1px dashed #555;"
//     }
// }

const NotificationsTable = ({notifications, addNotification, refreshTable, toggleComplete, notificationDelete}) => (
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
                 (notification) => <NotificationRow key={notification.id+notification.title} {...notification} toggleComplete={toggleComplete} notificationDelete={notificationDelete} />
             )
         }
        </tbody>
   </table>
    )

export default NotificationsTable
