import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let date, importance, title, nextAction, details;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim()) {
            return
          }
          dispatch(addTodo(date.value, importance.value, title.value, nextAction.value, details.value))
          date.value = '';
          importance.value = '';
          title.value = '';
          nextAction.value = '';
          details.value = '';
        }}
      >
          <input ref={node => {
              date = node
            }}
          />
          <input ref={node => {
              importance = node
            }}
          />
        <input ref={node => {
            title = node
          }}
        />
        <input ref={node => {
            nextAction = node
          }}
        />
        <input ref={node => {
            details = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
