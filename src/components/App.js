import React from 'react'
import Header from './Header'
import NotificationsTableContainer from '../containers/NotificationsTableContainer'
import StyledTextField from './StyledTextField'

const styles = {
    margin: "1% 10%"
}

const App = () => (
  <div style={styles}>
    <Header />
    <NotificationsTableContainer />
    <StyledTextField />
  </div>
)

export default App
// test   dfg
