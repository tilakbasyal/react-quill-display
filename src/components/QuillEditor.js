import React, { } from "react";
import ReactQuill from "react-quill";
import { withStyles, Button, Grid } from "@material-ui/core";


const styles = {
  paperWidth: {
    width: 80 + `%`,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  forText: {
    paddingTop: 1 + "em",
    paddingBottom: .3 + "em",
    marginTop: 1 + "em",
    margin: 0,
  },
  height: {
    height: 200,
  },
  htmlDisplay: {
    paddingTop: 25,
    paddingLeft: 30 + `%`
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorHtml: '',
      theme: 'snow',
      listHide: true,
      text: ''
    }
  }


  handleChange = (content, delta, source, editor) => {
    const text = editor.getHTML();
    this.setState({ editorHtml: text });
    console.log(editor.getLength());

    //  console.log(getContents());
    //  console.log(content);
    console.log(delta);
    // console.log(source);

    console.log(editor);

  }
  // handleChange = (html) => {
  // 	this.setState({ 
  //     editorHtml: html, }, () => {console.log(this.state.editorHtml)});
  // }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }
  handleClick = () => {
    alert("I am clicked");
  }


  render() {
    const { classes } = this.props;
    const { editorHtml } = this.state;
    return (
      <Grid container className={classes.grid}>
        <Grid item className={classes.paperWidth}>
          <h3 className={classes.forText} >Write your essay here:</h3 >
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            defaultValue={editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder="Enter your essay here"
            className={classes.height}
          />
          <Button variant="contained" color="primary" onClick={this.handleClick}>Submit</Button>
        </Grid>

        <Grid item className={classes.htmlDisplay} md={12} id="displayArea">
          <>
            <div dangerouslySetInnerHTML={{ __html: editorHtml }}></div>

            {/* {editorHtml.insert} */}
          </>
        </Grid>
      </Grid>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }],
    // [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


export default withStyles(styles)(Editor);