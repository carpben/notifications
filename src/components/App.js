import React, {Component} from 'react'
import Header from './Header'
import NotificationsTableContainer from '../containers/NotificationsTableContainer'
import {connect} from 'react-redux'
// import Footer from './Footer.js'
import './App.css'
import {setUser} from '../actions'

class App extends Component {
   componentWillMount(){
      window.firebase.auth().onAuthStateChanged( user => {
         // user===null --- signed out
         // user==={ uid:'390j4r93jfe908j', email:'@'  } --- signed in

         this.props.setUser(user);

      })
   }
   render () {
      return (
        <div>
          <Header />
          <NotificationsTableContainer />
        </div>
      )
   }
}

const mapStateToProps = (state)=>{};

const mapDispatchToProps = dispatch => {
   return {
      setUser:  user => dispatch(setUser(user))
   }
}
connect(mapStateToProps,mapDispatchToProps)(App)
export default App
// test   dfg
