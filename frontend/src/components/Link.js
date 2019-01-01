import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <article>
        <h3 className="feed_title">
          <a
            href={this.props.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.link.title}
          </a>
        </h3>
        <div className="site_name">
          <p>{this.props.link.siteName}</p>
        </div>
        <div>
          <p>
            {this.props.link.description}
          </p>
        </div>
      </article>
    )
  }
}

export default Link;