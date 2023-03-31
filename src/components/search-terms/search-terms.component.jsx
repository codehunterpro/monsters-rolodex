import "./search-terms.style.css";

const SearchTerms = ({
  filterMonsters,
  terms,
  placeholder,
  type,
  className,
}) => {
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type={type}
      value={terms}
      onChange={filterMonsters}
    />
  );
};

export default SearchTerms;
