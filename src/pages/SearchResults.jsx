import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {/* You can fetch actual products here based on query */}
    </div>
  );
};

export default SearchResults;
