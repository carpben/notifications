import { connect } from 'react-redux'
import NotificationsTable from '../components/NotificationsTable'
import {addNewNotification, deleteNotification, toggleComplete, refreshTable, editField, changeImportance, changeDate} from '../actions'

const mapStateToProps = (state) => {
    return {
        notificationsToDisplay: state.notifications.toDisplay,
        displayMode:state.display.displayMode
    }
}

const mapDispatchToProps = dispatch => ({
    addNewNotification: () => {
      dispatch(addNewNotification())
    },
})

const NotificationsTableContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsTable)

export default NotificationsTableContainer
