import React from 'react'
import NotificationRow from './NotificationRow.js'
import '../styles/NotificationTable.css'
import DISPLAY_MODES from '../CONSTS.js'
import PropTypes from 'prop-types';

import NotificationRowContainer from '../containers/NotificationRowContainer.js'


const NotificationsTable = ({ notificationsStore, notificationsToDisplay, addNewNotification, refreshTable,
    toggleComplete, deleteNotification, editField, changeImportance, changeDate, displayMode }) => {

    const t1 = performance.now()

    const notificationsTable = (
        <div>
            <table className="table NotificationsTable">
                <thead>
                    <tr>
                        {displayMode !== DISPLAY_MODES.NEXT.val ? <th className="date-col">Date</th> : null}
                        <th className="title-column">Project / Task / Reminder</th>
                        <th className="importance-column">Importance</th>
                        <th className="snooze-column"></th>
                        <th className="icon-1-column"></th>
                        <th className="icon-2-column"></th>
                        <th className="next-column">Next Step / Most Important</th>
                        <th className="details-column">More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notificationsToDisplay.map(
                            (notKey) => <NotificationRowContainer notKey={notKey} key={notKey} displayMode={displayMode} />
                                
                                /* <NotificationRow notKey={notKey} displayMode={displayMode} key={notKey}
                                {...notificationsStore[notKey]} toggleComplete={toggleComplete} deleteNotification={deleteNotification}
                                editField={editField} changeImportance={changeImportance} changeDate={changeDate} /> */
                            
                        )
                    }
                </tbody>
            </table>
        </div>
    )

    const t2 = performance.now()

    console.log("performance in NotificationTableContiner = ", t2-t1)

    return notificationsTable
}

NotificationsTable.propTypes = {
    notificationsStore: PropTypes.object.isRequired,
    notificationsToDisplay: PropTypes.array.isRequired,
    addNewNotification: PropTypes.func.isRequired,
    refreshTable: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteNotification: PropTypes.func.isRequired,
    editField: PropTypes.func.isRequired,
    changeImportance: PropTypes.func.isRequired,
    changeDate: PropTypes.func.isRequired,
    displayMode: PropTypes.number.isRequired
}

export default NotificationsTable
