import React from 'react';

import SearchIcon from "../../../public/icons/search.svg";

function SearchInput() {
    return (
      <button className="flex items-center justify-center gap-3 py-1 px-3 rounded-2xl font-semibold text-white border-2">
        <SearchIcon />
        Szukaj...
      </button>
    );
}

export default SearchInput;