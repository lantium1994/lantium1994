import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  // const onSearchChange = this.onSearchChange;
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
