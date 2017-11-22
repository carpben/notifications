import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const UnStyledTextField = (props) => {
	const {txt, editField, id, classes} = props;
	return (
		<div>
			<TextField
			 InputClassName={classes.TheInput}
	       id="multiline-flexible"
	       multiline
	       rowsMax="4"
	       value={txt}
	       onChange={(e)=> editField(id, "title", e.target.value )}
	     />
		</div>
	)
}

const styles = theme => ({
	TheInput: {
		fontSize: 12,
		lineHeight: 1.6
	}
});

const StyledTextField2 = withStyles(styles)(UnStyledTextField);

export default StyledTextField2
