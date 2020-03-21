import React, { useState } from 'react';
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

const Edit = () => {
  const [text, setState] = useState('# h1');

  const handleChange = event => {
    setState(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <TextArea handleChange={handleChange} value={text} style={{...boxStyle, fontSize: "25px"}}/>
      <Preview text={text} style={boxStyle}/>
    </div>
  )
};

export default Edit;
