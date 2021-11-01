import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <h1>1st Gen Pokemon Search</h1>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
