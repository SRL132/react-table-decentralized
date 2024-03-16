import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './App.css';
import JobDashboard from './components/dashboards/JobDashboard';
import { ReactQueryDevtools } from "react-query/devtools"
import { JobProvider } from './components/context/jobContext';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_SUBGRAPH_URL,
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <JobProvider>
        <JobDashboard />
      </JobProvider>
      </ApolloProvider>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
