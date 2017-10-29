import { connect } from 'react-redux'
import NotificationsTable from '../components/NotificationsTable'
import {addNotification, notificationDeleteAction, toggleComplete, refreshTable} from '../actions'

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
    notificationDelete: (id) => dispatch(notificationDeleteAction(id))
})

const NotificationsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsTable)

export default NotificationsTableContainer
