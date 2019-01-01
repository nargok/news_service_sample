import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Link from './Link';
import { FEED_QUERY } from '../graphql';

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div className="main">Loading...</div>
          if (error) {
            console.log({error})
            return <div className="main">Error</div>
          }

          const linksToRender = data.allLinks.edges;

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
