
  interface SearchBarProps {
    search: string
    setSearch: (value: string) => void
  }

  const SearchBar = ({ search, setSearch }: SearchBarProps) => {
    return (
      <div className='search-container'>
        <input type="text" placeholder='search name'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      </div>
    )
  }

  export default SearchBar
