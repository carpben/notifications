import { connect } from 'react-redux'
import StyledTextField from '../components/StyledTextField'
import {editMessage} from '../actions'

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = dispatch => ({
    editMessage: (newMessage) => dispatch(editMessage(newMessage))
})

const StyledTextFieldContainer = connect(mapStateToProps, mapDispatchToProps)(StyledTextField)

export default StyledTextFieldContainer
