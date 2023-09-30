import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([]) 
  const [search, setSearch] = useState("")
  const [form, formData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    },
    
  })
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
    })
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    console.log(name)
    console.log(value)
    formData({
      ...form,
      [name]: value
    })
  }
 
  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPokemon(setPokemon)
  })
  }
 
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} search={search} setSearch={setSearch} form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
