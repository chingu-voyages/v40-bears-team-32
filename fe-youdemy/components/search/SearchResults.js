import SearchResult from "./SearchResult.js";

export default function SearchResults(props) {
  const resultsArray = props.results.map((result) => {
    return <SearchResult key={result.id} result={result} />;
  });
  return <div>{resultsArray}</div>;
}
