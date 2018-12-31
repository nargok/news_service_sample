import gql from 'graphql-tag';

export const FEED_QUERY = gql`
{
  allLinks {
    edges {
      node {
        id
        url
        description
        title
      }
    }
  }
}
`;