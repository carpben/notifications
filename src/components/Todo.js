import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, importance,details, title,  completed }) => (
    <div>
        <li> {importance} </li>
        <li onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {title}
        </li>
        <li> {details} </li>
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired
  //text: PropTypes.string.isRequired
}

export default Todo
