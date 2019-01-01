import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Link from './Link';
import { FEED_QUERY } from '../graphql';

class LinkList extends Component {

  _getLinksToRender = (links) => {
    const sorted_links = links.sort((link1, link2) => link1.node.createdAt < link2.node.createdAt ? 1 : -1);
    return sorted_links;
  };

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div className="main">Loading...</div>
          if (error) {
            console.log({error})
            return <div className="main">Error</div>
          }

          const linksToRender = this._getLinksToRender(data.allLinks.edges);

          return (
            <div className="main">
              {linksToRender.map(link => <Link key={link.node.id} link={link.node} />)}
            </div>
          )
        }}
      </Query>
    )
  }
};

export default LinkList;
