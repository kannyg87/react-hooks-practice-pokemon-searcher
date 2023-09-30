import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poki }) {
  const [pokemonimg, setPokemonimg] = useState(poki.sprites.front);
  function handleClick() {
    if (pokemonimg === poki.sprites.back) {
      setPokemonimg(poki.sprites.front)
    } else  {
      setPokemonimg(poki.sprites.back)
    }
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <div className="image">
            <img
              src={pokemonimg}
              alt={`${poki.name ? "front" : "back"}`}
              onClick={() => handleClick()}
            />

          </div>
        </div>
        <div className="content">
          <div className="header">{poki.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poki.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
