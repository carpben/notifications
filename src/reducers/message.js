
const message = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_MESSAGE':
      return action.newMessage
    default:
      return state
  }
}

export default message
