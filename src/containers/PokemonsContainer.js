import { useQuery } from "@apollo/react-hooks";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <div className="container">
      {/* if pokemons is declaired then map out every pokemon */}
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}

export default PokemonsContainer;
