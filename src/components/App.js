import React from 'react'
import Header from './Header'
import NotificationsTableContainer from '../containers/NotificationsTableContainer'
import StyledTextFieldContainer from '../containers/StyledTextFieldContainer'

const styles = {
    margin: "1% 10%"
}

const App = () => (
  <div style={styles}>
    <Header />
    <NotificationsTableContainer />
    <StyledTextFieldContainer />
  </div>
)

export default App
// test   dfg
