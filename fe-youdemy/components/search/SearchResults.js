import SearchResult from "./SearchResult.js";

export default function SearchResults(props) {
<<<<<<< HEAD
  const resultsArray = props.results.map((result) => {
=======
  const resultsArray = props.filteredResults.map((result) => {
>>>>>>> origin/main
    return <SearchResult key={result.id} result={result} />;
  });
  return <div>{resultsArray}</div>;
}
