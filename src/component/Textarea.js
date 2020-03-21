import React from 'react';

const TextArea = props => {
    return (
      <textarea onChange={props.handleChange} value={props.value} style={props.style}/>
    )
};

export default TextArea;
