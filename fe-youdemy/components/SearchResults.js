import SearchResult from "./SearchResult.js";
// import TextImage from "./TextImage.js";

export default function SearchResults(props) {
  const resultsArray = props.results.map((result) => {
    return <SearchResult key={result.id} result={result} />;
    // return <TextImage key={result.id} result={result} styles={styles} />;
  });
  return <div>{resultsArray}</div>;
}
