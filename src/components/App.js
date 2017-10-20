import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TableContainer from '../containers/TableContainer'
import NotificationsFlex1 from './NotificationsFlex1'

const App = () => (
  <div>
    <Header />
    <AddTodo />
    {/* <TableContainer /> */}
    <NotificationFlexRow1 />
    <NotificationsFlex1 />
    <h1>---</h1>
    {/* <Table /> */}
    {/* <VisibleTodoList /> */}
    {/* <Footer /> */}
  </div>
)

export default App
// test   dfg
