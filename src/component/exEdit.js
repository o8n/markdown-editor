import React from 'react';
import TextArea from './Textarea';
import Preview from './Preview';

const containerStyle = {
  display: "flex",
};

const boxStyle = {
  height: "95vh",
  width: "70vw",
  padding: "40px"
};

class exEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div style={containerStyle}>
        <TextArea onChange={this.handleChange} style={{...boxStyle, fontSize: "25px"}} value={this.state.value} type="text"/>
        <Preview style={boxStyle}/>
      </div>
    )
  }
}
export default exEdit;
