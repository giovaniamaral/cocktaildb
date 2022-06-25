import "./styles.css";

const SearchInput = ({ value, setValue }) => {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <form>
        <h1>Search Your Favorite Drink</h1>
        <input
          type="text"
          placeholder="Search for ..."
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SearchInput;
