import React from 'react';

const ColumnHeader = ({str}) => <input style={{flex:1, fontWeight:700}} value={str} />

const NotificationsHeader = () => (
    <div style={{display:"flex"}}>
        <ColumnHeader str="date" />
        <ColumnHeader str="Importance (1-5)" />
        <ColumnHeader str="Title" />
        <ColumnHeader str="Next Action" />
        <ColumnHeader str="More Details" />
    </div>
)

export default NotificationsHeader
