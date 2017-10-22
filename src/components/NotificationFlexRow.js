import React from 'react';
import {Checkbox} from 'react-bootstrap'


const NotificationFlexRow = ({date, importance, title, nextAction, moreDetails}) => (
    <div style={{display:"flex"}}>
        <textarea style={{flexBasis:70}}>{date}</textarea>
        <textarea style={{flex:1}}>{importance}</textarea>
        <textarea style={{flex:1}}>{title}</textarea>
        <textarea style={{flex:1}}>{nextAction}</textarea>
        <textarea style={{flex:1}}>{moreDetails}</textarea>
        <div style={{flex:1}}><Checkbox /></div>

    </div>
)

export default NotificationFlexRow
