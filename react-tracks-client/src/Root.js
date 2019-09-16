import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
  <Query query={GET_TRACKS}>
    {({ data, loading, error }) => {
      if (loading) return <div> loading.. </div>;
      if (error) return <div> error: {error} </div>;
      return <div> data: {JSON.stringify(data, null, 2)} </div>;
    }}
  </Query>
);

export default withRoot(Root);
