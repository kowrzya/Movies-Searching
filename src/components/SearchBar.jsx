const SearchBar = (props) => {
    const {query, setQuery} = props
    return (
        <input className="search-bar"
        placeholder="Search for a movie... "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    )

}

export default SearchBar