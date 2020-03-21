import React from 'react';
import 'github-markdown-css';
import remark2react from 'remark-react';

const remark = require('remark');
const remarkReact = require('remark-react');

const Preview = props => {
  return (
    <div className={"markdown-body"} style={props.style}>
      {
        remark()
          .use(remarkReact, { sanitize: false, })
          .use(remark2react)
          .processSync(props.text).contents
      }
    </div>
  )
};

export default Preview;
