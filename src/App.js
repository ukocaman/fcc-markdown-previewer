import React, { Component } from 'react';
import marked from 'marked'
import './App.css';

const INITIAL_INPUT = `# Heading!
## Sub-heading
[Link to Fenerbahce](http://www.fenerbahce.org)

\`const a = 5\`
\`\`\`
function test() {
 return 'hello';
}
\`\`\`
- list item 1
- list item 2

> Block quote

**bold** _italic_

![React Logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)`

class App extends Component {
  state = {
    input: INITIAL_INPUT
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  parseInput = (input) => {
    return {__html: marked(input)}
  }

  render() {
    return (
      <div className="App">
        <div className='wrapper'>
          <div className='bar'>
            <i className="far fa-edit"></i> <b>Editor</b>
          </div>
          <textarea 
            id='editor'
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
        <div className='wrapper'>
          <div className='bar'>
          <i class="far fa-eye"></i> <b>Preview</b>
          </div>
          <div 
            id='preview'
            dangerouslySetInnerHTML={this.parseInput(this.state.input)} >
          </div>
        </div>
      </div>
    );
  }
}

export default App;
