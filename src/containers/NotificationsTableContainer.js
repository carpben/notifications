import { connect } from 'react-redux'
import NotificationsTable from '../components/NotificationsTable'
import {addNewNotification, deleteNotification, toggleComplete, refreshTable, editField, changeImportance, changeDate} from '../actions'

const mapStateToProps = (state) => {
    return {
        notificationsStore: state.notifications.store,
        notificationsToDisplay: state.notifications.toDisplay,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    addNewNotification: (userId) => {

      dispatch(addNewNotification(userId))
    },
    refreshTable: () => dispatch(refreshTable()),
    toggleComplete: (notKey, completed) => dispatch(toggleComplete(notKey, completed)),
    deleteNotification: (notKey) => dispatch(deleteNotification(notKey)),
    editField: (notKey, field, text) => dispatch(editField(notKey,field,text)),
    changeImportance: (notKey, newImportanceValue) => dispatch(changeImportance(notKey, newImportanceValue)),
    changeDate: (notKey, newDate) => dispatch(changeDate(notKey, newDate))
})

const NotificationsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsTable)

export default NotificationsTableContainer
