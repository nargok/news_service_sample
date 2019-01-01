import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Link from './Link';
import { FEED_QUERY } from '../graphql';

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>
          if (error) {
            console.log({error})
            return <div>Error</div>
          }

          const linksToRender = data.allLinks.edges;

          return (
            <React.Fragment>
              {linksToRender.map(link => <Link key={link.node.id} link={link.node} />)}
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
};

export default LinkList;
