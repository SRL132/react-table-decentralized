import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const GET_ACTIVE_ITEMS = gql`
  {
    jobAddeds(first: 20) {
      id
      Jobs_id
      originalId
      operatingUnit
      officePostalCode
      totalHours
      clientId
      operatingUnit
      isUnassigned
    }
  }
`;

const client = new ApolloClient({
  uri: process.env.REACT_APP_SUBGRAPH_URL, // replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

export const fetchJobs = async () => {
  const { data } = await client.query({ query: GET_ACTIVE_ITEMS });
  console.log(data);
  return data?.jobAddeds;
};

export const fetchAllJobs = async () => {
  const { data } = await client.query({ query: GET_ACTIVE_ITEMS });
  return data?.jobAddeds;
};
