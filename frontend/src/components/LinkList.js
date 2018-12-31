import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Link from './Link';
import { FEED_QUERY } from '../graphql';

class LinkList extends Component {
  render() {
    const linksToRender = [
      {
        id: 1,
        title: 'Yahoo Japan',
        url: 'https://www.yahoo.co.jp',
        description: '検索されるWebサイト第1位'
      },
      {
        id: 2,
        title: 'Gizmode Japan',
        url: 'https://www.gizmodo.jp/',
        description: '日本最大級のガジェット紹介サイト'
      }
    ]
    return (
      <Query query={FEED_QUERY}>
        {() => linksToRender.map(link =>
          <Link key={link.id} link={link} />
        )}
      </Query>
    )
  }
};

export default LinkList;