import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.filter(pokemon => pokemon.name.includes(search)).map(poki => <PokemonCard poki={poki } key={poki.id} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
