import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, search, setSearch, form, handleChange, handleSubmit}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
