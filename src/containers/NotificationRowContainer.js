import { connect } from 'react-redux'
import NotificationRow from '../components/NotificationRow'
import {addNewNotification, deleteNotification, toggleComplete, refreshTable, editField, changeImportance, changeDate} from '../actions'

const mapStateToProps = (state,ownProps) => {
    const notification = state.notifications.store[ownProps.notKey]
    return {
        notKey: ownProps.notKey, 
        ...notification, 
        displayMode:state.display.displayMode,
    }
}

const mapDispatchToProps = dispatch => ({
    toggleComplete: (notKey, completed) => dispatch(toggleComplete(notKey, completed)),
    deleteNotification: (notKey) => dispatch(deleteNotification(notKey)),
    editField: (notKey, field, text) => dispatch(editField(notKey,field,text)),
    changeImportance: (notKey, newImportanceValue) => dispatch(changeImportance(notKey, newImportanceValue)),
    changeDate: (notKey, newDateStr) => dispatch(changeDate(notKey, newDateStr))
})

const NotificationRowContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationRow)

export default NotificationRowContainer
