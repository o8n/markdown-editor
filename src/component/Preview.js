import React from 'react';
import 'github-markdown-css';
import remarkRenderer from 'remark-react';
import RemarkLowlight from 'remark-react-lowlight';
import hljs from 'highlight.js';

const remark = require('remark');
const remarkReact = require('remark-react');

const Preview = props => {
  return (
    <div className={"markdown-body"} style={props.style}>
      {
        remark()
          .use(remarkReact, { 
            sanitize: true,
            prefix: 'md-',
            remarkReactComponents: {
              code: RemarkLowlight({
                hljs
              })
            }
          })
          .use(remarkRenderer)
          .processSync(props.text).contents
      }
    </div>
  )
};

export default Preview;
