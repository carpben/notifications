import React from 'react'
import NotificationFlexRow from '../components/NotificationFlexRow'
import NotificationsHeader from '../components/NotificationsHeaderFlexRow'

// const TD = ({content}) => <td style={{padding:0}}><input style={{width:100}} value={content} /></td>
let someThing

const NotificationsTable = ({notifications}) => {
    console.log("ntoficiation table now running")
    return (
        <div>
          <NotificationsHeader />
          {
              notifications.map(
                  (notification) => <NotificationFlexRow key={notification.id+notification.title} notification={notification} />
              )
          }

      </div>
    )
}



export default NotificationsTable
