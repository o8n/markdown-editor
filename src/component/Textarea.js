import React from 'react';

const Textarea = props => {
    return (
      <textarea onChange={props.handleChange} value={props.value} style={props.style}/>
    )
};

export default Textarea;
