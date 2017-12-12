import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux'
import '../styles/AboutDraw.css'
import {toggleAboutDraw} from '../actions'

const AboutDraw = (props) => {

   return (
      <Drawer
        docked={false}
        width={450}
        open={true}
        openSecondary={true}
        containerClassName="about-draw"
        onRequestChange={(open) => {
           console.log(51)
           props.toggleAboutDraw()
        }}
      >
         <h2>Welcome To Next!</h2>
         <p>Next is another to-do app, but it's a bit different. It's based on 3 principles:
            <ol>
               <li>Focus on the next step, hence the "next Action" field.</li>
               <li>priority counts. Hence the importance field. The more important tasks show first.</li>
               <li>An important part of handling a task is deciding when it should pop-up again. Managing snooze should be as easy as possible.</li>
            </ol>
            So go ahead give it a go, and start adding tasks and notifications.
          </p>
          <p>My name is Ben Carp, and I developed this app out of my own experience and needs.
          Your feedback counts. Seriously. Feel free to provide feedback and report bugs either to this
          <a href="https://github.com/carpben/notifications/issues"> github repository</a>, or directly to my
          <a href="mailto:carpben123@gmail.com">email</a>.
          Cheers!
          </p>

      </Drawer>
   )
}

class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

}

const mapDispatchToProps = (dispatch) =>({
   toggleAboutDraw : () =>   dispatch(toggleAboutDraw())
})

const mapStateToProps = (state) => ({
   showAbout:state.display.showAbout
})

const AboutDrawContainer = connect(mapStateToProps, mapDispatchToProps)(AboutDraw)

export default AboutDrawContainer
