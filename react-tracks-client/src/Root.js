import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Auth from './components/Auth'

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
  <Auth/>
  // <Query query={GET_TRACKS}>
  //   {({ data, loading, error }) => {
  //     if (loading) return <div> loading.. </div>;
  //     if (error) return <div> error: {error} </div>;
  //     return <div> data: {JSON.stringify(data, null, 2)} </div>;
  //   }}
  // </Query>
);

export default withRoot(Root);
