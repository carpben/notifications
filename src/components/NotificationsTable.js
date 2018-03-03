import React from 'react'
import NotificationRowContainer from '../containers/NotificationRowContainer.js'
import DISPLAY_MODES from '../CONSTS.js'
import PropTypes from 'prop-types';
import '../styles/NotificationTable.css'



const NotificationsTable = ({ notificationsToDisplay, addNewNotification, displayMode }) => {

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
                            (notKey) => <NotificationRowContainer notKey={notKey} key={notKey}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )

    return notificationsTable
}

NotificationsTable.propTypes = {
    notificationsToDisplay: PropTypes.array.isRequired,
    addNewNotification: PropTypes.func.isRequired,
    displayMode: PropTypes.number.isRequired
}

export default NotificationsTable
