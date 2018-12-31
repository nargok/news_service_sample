import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <li>
        <a
          href={this.props.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.link.title}
        </a>
      </li>
    )
  }
}

export default Link;