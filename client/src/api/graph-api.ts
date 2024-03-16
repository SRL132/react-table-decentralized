import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export interface FetchOptions {
  itemsPerPage: number;
  sortOptions?: SortOptions;
  filterOptions?: FilterOptions[];
}
export type SortOptions = {
  sortBy: string;
  sortOrder: string;
};

export type FilterOptions = {
  filterBy: string;
  filterParam: string;
};

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
const getQuery = (page = 0, fetchOptions: FetchOptions) => {
  const filterOptions = fetchOptions.filterOptions?.filter(
    (filterOption) =>
      filterOption.filterBy !== "q" && filterOption.filterParam !== ""
  );
  const whereClause = filterOptions?.map((filterOption) => {
          if(filterOption.filterBy === "isUnassigned"){
            return `${filterOption.filterBy}: ${filterOption.filterParam}`;
          }
          return `${filterOption.filterBy}_starts_with: "${filterOption.filterParam}"`;
        })
        .join(", ")

  console.log(whereClause);
  const skip = (page - 1) * fetchOptions.itemsPerPage;
    const orderBy = fetchOptions.sortOptions?.sortBy
    const orderDirection = fetchOptions.sortOptions?.sortOrder

  let query = gql`{
    jobAddeds(first: ${fetchOptions.itemsPerPage}, skip: ${skip}, orderBy: ${orderBy}, orderDirection: ${orderDirection}, where: {${whereClause}}) {
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
  }`;
  return query;
};

const client = new ApolloClient({
  uri: process.env.REACT_APP_SUBGRAPH_URL, // replace with your GraphQL server URI
  cache: new InMemoryCache(),
});

//todo: add sorting and filtering

//case 1: no filters --covered
//case 2: sort asc
//case 3: sort desc
//case 3: filter
//case 4: all filter

export const fetchJobs = async (
  page = 0,
  fetchOptions: FetchOptions = {
    itemsPerPage: 10,
    sortOptions: {
      sortBy: "id",
      sortOrder: "asc",
    },
    filterOptions: [
      {
        filterBy: "q",
        filterParam: "",
      },
    ],
  }
) => {
  console.log(fetchOptions);
  const query = getQuery(page, fetchOptions);
  console.log(query);
  const { data } = await client.query({ query: query });
  console.log(data);
  return data?.jobAddeds;
};

export const fetchAllJobs = async () => {
  const { data } = await client.query({ query: GET_ACTIVE_ITEMS });
  return data?.jobAddeds;
};
