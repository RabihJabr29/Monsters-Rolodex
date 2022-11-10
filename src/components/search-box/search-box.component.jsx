import "./search-box.style.css";

const SearchBox = (props) => {
  const { className, searchPlaceholder, onChangeHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={searchPlaceholder}
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;
