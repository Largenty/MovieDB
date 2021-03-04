import React from "react";

export default function SearchBox(props) {
  return (
    <div>
      <input
        placeholder="enter search term"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
    </div>
  );
}
