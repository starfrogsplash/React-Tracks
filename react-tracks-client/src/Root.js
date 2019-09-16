import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      likeSet {
        track {
          id
        }
      }
    }
  }
`;

const GET_TRACKS = gql`
  {
    tracks {
      id
      title
      description
      url
    }
  }
`;

const Root = () => (

  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div> loading.. </div>;
      if (error) return <div> error: {error} </div>;
      return <div> data: {JSON.stringify(data, null, 2)} </div>;
    }}
  </Query>
);

export default withRoot(Root);
