import React, { Component, Fragment } from 'react';
import { ListItem, ListItemText, List, ListItemIcon, withStyles } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon  from "@material-ui/icons/Drafts";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';
import SecurityIcon from "@material-ui/icons/Security";
import { Button } from "@material-ui/core";
import QuillEditor from './QuillEditor';


const styles = {
    root : {
        display : 'flex',
    },
    child : {
        display : 'block'
    }
}

class Lists extends Component {
    state = {
        showEditor : false,
        // displayHtml : this.props.typed,
    }

    handleClick = () => {
        this.setState({
            showEditor: true,
        })
    }


    render() {
        // const { showEditor } = this.state;
        const { classes, textbody } = this.props;
        // console.log(typeof(textbody));
        return (
            <Fragment>
            <div className = {classes.root}>
                <List>
                    <ListItem>
                        <Button variant='contained' color='primary' onClick = {this.handleClick}>Compose</Button>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <SecurityIcon />
                        </ListItemIcon>
                        <ListItemText primary = "Spam" />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <DeleteForeverIcon />
                        </ListItemIcon>
                        <ListItemText primary = "Trash" />
                    </ListItem>                    
                </List>

                <QuillEditor /> 
            </div>
            <div className = {classes.child}>
                {textbody}
            </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Lists);
