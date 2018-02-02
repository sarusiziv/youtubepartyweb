import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
class ErrorAddDialog extends React.Component {
	
	constructor(props){
		super(props);
		this.handleClose=this.handleClose.bind(this);
	}
	
  handleClose(){
	  this.props.onClose();
  };

  render() {

    const actions = [ 
      <FlatButton
        label="ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
		  title={(<p>Error</p>)}
          actions={actions}
          modal={false}
          open={this.props.dialogOpen}
          onRequestClose={this.handleClose}
        >
		Cant Add your specific Youtube ID !
        </Dialog>
      </div>
    );
  }
}
export default ErrorAddDialog;