import React from 'react'
import NotificationRow from './NotificationRow.js'
import '../styles/NotificationTable.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DISPLAY_MODES from '../CONSTS.js'

const style = {
  color: 'white',
  fontSize:30
};

const NotificationsTable = ({notificationsStore, notificationsToDisplay, addNewNotification, refreshTable,
   toggleComplete, deleteNotification, editField, changeImportance, changeDate, user, displayMode}) => (


   <div>

        <table className="table NotificationsTable">
           <thead>
               <tr>
               {displayMode!=DISPLAY_MODES.NEXT.val? <th className="date-col">Date</th> :""}
                 <th className="title-column">Task / Reminder</th>
                 <th className="importance-column">Importance</th>
                 <th className="next-column">Next Action</th>
                 <th className="details-column">More Details</th>
                 <th className="snooze-column"></th>
                 <th className="icon-1-column"></th>
                 <th className="icon-2-column"></th>
               </tr>
           </thead>
           <tbody>
            {
                notificationsToDisplay.map(
                    (notKey) => <NotificationRow notKey={notKey} displayMode={displayMode} key={notKey}
                     {...notificationsStore[notKey]} toggleComplete={toggleComplete} deleteNotification={deleteNotification}
                     editField={editField} changeImportance={changeImportance} changeDate={changeDate}/>
                )
            }
           </tbody>
        </table>


   </div>
    )

export default NotificationsTable
