import { connect } from 'react-redux'
import NotificationsTable from '../components/NotificationsTable'
import {addNotification, notificationDeleteAction, toggleComplete, refreshTable, editField, changeImportance} from '../actions'

const mapStateToProps = (state) => {
    return {
        notifications: state
    }
}

const mapDispatchToProps = dispatch => ({
    addNotification: () => {
        console.log('onClick runs')
        dispatch(addNotification())
    },
    refreshTable: () => dispatch(refreshTable()),
    toggleComplete: (id) => dispatch(toggleComplete(id)),
    deleteNotification: (id) => dispatch(notificationDeleteAction(id)),
    editField: (id, field, text) => dispatch(editField(id,field,text)),
    changeImportance: (id, newImportanceValue) => dispatch(changeImportance(id, newImportanceValue))
})

const NotificationsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsTable)

export default NotificationsTableContainer
