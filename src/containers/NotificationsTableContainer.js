import { connect } from 'react-redux'
import NotificationsTable from '../components/NotificationsTable'

const mapStateToProps = (state) => {
    console.log("maps state to props. State is")
    console.log(state)
    return {
        notifications: state
    }
}

const NotificationsTableContainer = connect(mapStateToProps)(NotificationsTable)

export default NotificationsTableContainer
