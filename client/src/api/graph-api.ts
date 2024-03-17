import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { FieldConfig } from "../components/config/main/schema";

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
const getQuery = (
  page = 0,
  fetchOptions: FetchOptions,
  allFields: Record<string, FieldConfig>
) => {
  const filterOptions = fetchOptions.filterOptions?.filter(
    (filterOption) =>
      filterOption.filterBy !== "q" && filterOption.filterParam !== ""
  );

  let whereClause = filterOptions
    ?.map((filterOption) => {
      if (filterOption.filterBy === "isUnassigned") {
        return `${filterOption.filterBy}: ${filterOption.filterParam}`;
      }
      if (filterOption.filterBy === "totalHours") {
        return `totalHours: ${
          isNaN(Number(filterOption.filterParam)) ? 0 : filterOption.filterParam
        }`;
      }
      if (filterOption.filterBy === "Jobs_id") {
        return `Jobs_id: ${
          isNaN(Number(filterOption.filterParam)) ? 0 : filterOption.filterParam
        }`;
      }
      const startWithClause = `${filterOption.filterBy}_starts_with: "${filterOption.filterParam}"`;
      return startWithClause;
    })
    .join(", ");

  if (
    fetchOptions.filterOptions?.some(
      (option) => option?.filterBy === "q" && option?.filterParam !== ""
    )
  ) {
    whereClause = `or: [${Object.keys(allFields)
      ?.filter((field) => {
        if (field === "totalHours") {
          return !isNaN(Number(fetchOptions?.filterOptions?.[0]?.filterParam));
        }
        return field !== "isUnassigned";
      })
      .map((filterOption) => {
        if (
          (filterOption === "totalHours" || filterOption === "Jobs_id") &&
          !isNaN(Number(fetchOptions?.filterOptions?.[0]?.filterParam))
        ) {
          return `{${filterOption}: ${fetchOptions?.filterOptions?.[0]?.filterParam}}`;
        }
        if (filterOption !== "totalHours" && filterOption !== "Jobs_id") {
          return `{${filterOption}_starts_with: "${fetchOptions?.filterOptions?.[0]?.filterParam}"}`;
        }
      })}]`;

    if (filterOptions?.some((option) => option?.filterBy === "isUnassigned")) {
      whereClause += ", and: [{ isUnassigned: true }]";
    }
  }

  const skip = (page) * fetchOptions.itemsPerPage;

  const orderBy = fetchOptions.sortOptions?.sortBy;
  const orderDirection = fetchOptions.sortOptions?.sortOrder;

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
//case 4: all filter

export const fetchJobs = async (
  page = 0,
  fetchOptions: FetchOptions = {
    itemsPerPage: 9,
    sortOptions: {
      sortBy: "Jobs_id",
      sortOrder: "asc",
    },
    filterOptions: [
      {
        filterBy: "q",
        filterParam: "",
      },
    ],
  },
  allFields: Record<string, FieldConfig>
) => {
  console.log(page)
  const query = getQuery(page, fetchOptions, allFields);

  const { data } = await client.query({ query: query });

  return data?.jobAddeds;
};

export const fetchAllJobs = async () => {
  const { data } = await client.query({ query: GET_ACTIVE_ITEMS });
  return data?.jobAddeds;
};
