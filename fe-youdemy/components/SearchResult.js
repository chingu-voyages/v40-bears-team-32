export default function SearchResult(props) {
  return (
    <div
      className="search-card"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: 1000,
        margin: "0 auto",
        padding: 50,
        marginTop: 50,
      }}
    >
      <img
        className="search-image"
        style={{
          height: 150,
          width: 180,
          borderRadius: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        src={props.result.imageUrl}
        alt="profile pic"
      />
      <div
        className="search-text-area"
        style={{
          width: "75%",
        }}
      >
        <h1 className="search-result" style={{ padding: 5 }}>
          {props.result.name}
        </h1>
        <h2 className="search-result" style={{ padding: 5 }}>
          {props.result.headline}
        </h2>
        <h4 className="search-result" style={{ padding: 5 }}>
          Skills: {props.result.skills}
        </h4>
        <p>{props.result.description}</p>
      </div>
    </div>
  );
}
