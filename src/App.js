import React, { Component } from 'react';
import Lists from './components/Lists';
// import { withStyles } from '@material-ui/core';
// import { Button } from "@material-ui/core";
// import QuillEditor from './components/QuillEditor';


// const styles = {
//   root : {
//     display : 'flex',
//   },
//   leftPart : {
//     widht : 30+'%',
//   }
// }

class App extends Component {
  state = {
    showEditor : false,
  }


  handleClick = () => {
    this.setState({
      showEditor : true,
    })
  }
  render() {
    // const { showEditor } = this.state;
    // const { classes } = this.props;
    return (
      <div >
        <Lists />        
      </div>
    )
  }
}


export default App;