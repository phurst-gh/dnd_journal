import React from "react";
import './search.css';

const Search = () => {
  return (
    <section className="searchHeader">
      <div className="searchHeader-inner">
        <h1>DnD Journal</h1>
        <input type="text" className="search" />
      </div>
    </section>
  )
}

export default Search;