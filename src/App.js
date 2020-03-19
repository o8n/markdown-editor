import React from 'react'
import ReactDOM from 'react-dom'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

class App extends React.Component {
  constructor() {
    super()
    this.state = { text: '# hello world' }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({ text: e.target.value })
  }
  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.onChange} />
        <div id="preview">
          {
            unified()
              .use(parse)
              .use(remark2react)
              .processSync(this.state.text).contents
          }
        </div>
      </div>
    )
  }
}

export default App;
