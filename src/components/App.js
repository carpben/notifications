import React from 'react'
import Header from './Header'
import ControlPanel from './ControlPanel'
// import TableContainer from '../containers/TableContainer'
import NotificationsTableContainer from '../containers/NotificationsTableContainer'
// import NotificationsFlex1 from './NotificationsFlex1'

const styles = {
    margin: "1% 10%"
}
const App = () => (
  <div style={styles}>
    <Header />
    <ControlPanel />
    {/* <TableContainer /> */}
    <NotificationsTableContainer />
  </div>
)

export default App
// test   dfg
