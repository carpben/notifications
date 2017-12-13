import React, {Component} from 'react'
import Header from '../components/Header'
import SignInScreen from '../components/SignInScreen.js'
import NotificationsTableContainer from './NotificationsTableContainer'
import {connect} from 'react-redux'
// import Footer from './Footer.js'
import '../styles/App.css'
import {setUser, createUserState} from '../actions'
import {fireAuth} from '../fire.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Card} from 'material-ui/Card';

import ControlPanelContainer from './ControlPanelContainer.js'
import AboutDrawContainer from './AboutDrawContainer'


class App extends Component {

   // constructor (props){
   //    super (props)
   // }

   componentWillMount(){
      fireAuth.onAuthStateChanged( user => {
         this.props.setUser(user);
         if(user){
            console.log()
            this.props.createUserState(user.uid)
            }
         })
   }

   render () {
      if (this.props.user){
         return (
            <MuiThemeProvider >
               <div className="App-w">
                  <Header />
                  {this.props.showAbout? <AboutDrawContainer /> : ""}
                  <ControlPanelContainer />
                  <main className="inner-w card1">

                           <NotificationsTableContainer />
                  </main>
               </div>
           </MuiThemeProvider>
         )
      }
      return <SignInScreen />
   }

}

const mapStateToProps = state => ({
   user:state.user,
   showAbout:state.display.showAbout
})

const mapDispatchToProps = dispatch => {
   return {
      setUser:  user => {
         dispatch(setUser(user))
      },
      createUserState: userId => dispatch(createUserState(userId))
   }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)


export default AppContainer
// test   dfg
