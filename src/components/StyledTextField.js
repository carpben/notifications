import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

class UnStyledTextField extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			txt:  'Multiline input field with custom font size and line height',
		}
	}
	render(){
		const {classes} = this.props;
		return (
			<div>
				<TextField
					InputClassName={classes.TheInput}
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.txt}
          onChange={e=>this.setState({txt: e.target.value})}
        />
			</div>
		)
	}
}

const styles = theme => ({
	TheInput: {
		fontSize: 13,
		lineHeight: 1.8
	}
});

const StyledTextField = withStyles(styles)(UnStyledTextField);

export default StyledTextField
