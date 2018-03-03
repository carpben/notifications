import { connect } from 'react-redux'
import NotificationRow from '../components/NotificationRow'
import {addNewNotification, deleteNotification, toggleComplete, refreshTable, editField, changeImportance, changeDate} from '../actions'

const mapStateToProps = (state,ownProps) => {
    const {dateStr, importance, title, nextAction, details, completed} = state.notifications.store[ownProps.notKey]
    return {
        dateStr, importance, title, nextAction, details, completed,
        displayMode:state.display.displayMode,
        notKey: ownProps.notKey
    }
}

const mapDispatchToProps = dispatch => ({
    addNewNotification: () => {
      dispatch(addNewNotification())
    },
    refreshTable: () => dispatch(refreshTable()),
    toggleComplete: (notKey, completed) => dispatch(toggleComplete(notKey, completed)),
    deleteNotification: (notKey) => dispatch(deleteNotification(notKey)),
    editField: (notKey, field, text) => dispatch(editField(notKey,field,text)),
    changeImportance: (notKey, newImportanceValue) => dispatch(changeImportance(notKey, newImportanceValue)),
    changeDate: (notKey, newDateStr) => dispatch(changeDate(notKey, newDateStr))
})

const NotificationRowContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationRow)

export default NotificationRowContainer
