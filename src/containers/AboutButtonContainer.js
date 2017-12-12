import React from 'react'
import {connect} from 'react-redux'
import {toggleAboutDraw} from '../actions'

const AboutButton = (props) => (
   <button type="button" className="btn btn-link about-btn" onClick={props.toggleAboutDraw} >About</button>
)

const mapDispatchToProps = (dispatch) =>({
   toggleAboutDraw : () =>   dispatch(toggleAboutDraw())
})

const AboutButtonContainer = connect(null, mapDispatchToProps)(AboutButton)

export default AboutButtonContainer
