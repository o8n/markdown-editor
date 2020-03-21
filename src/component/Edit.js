import React, { useState } from 'react';
import Textarea from './Textarea';
import Preview from './Preview';

const containerStyle = {
  display: "flex",
  justifyContent: "space-evenly"
};

const boxStyle = {
  height: "95vh",
  width: "70vw",
  padding: "40px"
};

const Edit = () => {
  const [text, setState] = useState('# h1');

  const handleChange = e => {
    setState(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <Textarea handleChange={handleChange} 
                value={text} 
                style={{...boxStyle, fontSize: "30px"}}
      />
      <Preview text={text} style={boxStyle}/>
    </div>
  )
};

export default Edit;
