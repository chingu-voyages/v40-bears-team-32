const Review = (props) => {
  return (
    <div
      style={{
        display: "flex",
        color: "#2BA7DC",
        background: "white",
        borderRadius: 30,
        padding: 20,
        margin: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h2>Rating {props.review.rating}</h2>
      </div>
      <div style={{ paddingLeft: 25 }}>
        <h1>{props.review.title}</h1>
        <p>{props.review.description}</p>
        <h3 style={{ textAlign: "right" }}>
          {props.review.userName} - {props.review.date}
        </h3>
      </div>
    </div>
  );
};

export default Review;
