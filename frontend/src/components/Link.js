import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <div>
        <h2>
        <a
          href={this.props.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.link.title}
        </a>
        </h2>
        <p>
          {this.props.link.description}
        </p>
      </div>
    )
  }
}

export default Link;