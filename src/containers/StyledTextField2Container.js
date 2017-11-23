import { connect } from 'react-redux'
import StyledTextField2 from '../components/StyledTextField2'
import {editField} from '../actions'

const mapStateToProps = (state, ownProps) => {
   const {id, field} = ownProps
   const index = state.notifications.findIndex( element => element.id===id )
   const
    return {
      txt = state
        message: state.message

    }
}

const mapDispatchToProps = dispatch => ({
    editMessage: (newMessage) => dispatch(editMessage(newMessage))
})

const StyledTextFieldContainer = connect(mapStateToProps, mapDispatchToProps)(StyledTextField)

export default StyledTextFieldContainer
