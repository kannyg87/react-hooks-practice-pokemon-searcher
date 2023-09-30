import React from "react";

function Search({setSearch, search}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)
          }
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
