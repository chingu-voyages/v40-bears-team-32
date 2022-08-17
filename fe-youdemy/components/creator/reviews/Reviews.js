import Review from "./Review.js";

const Reviews = (props) => {
  const reviewArray = props.reviews.map((review) => {
    return <Review key={review.id} review={review} />;
  });
  return (
    <div
      style={{
        background: "#2BA7DC",
        width: 900,
        margin: "0 auto",
        color: "white",
        marginTop: 50,
        padding: 50,
        borderRadius: 30,
      }}
    >
      <h1 style={{ textAlign: "center" }}>Most Recent Reviews</h1>
      <div style={{ marginTop: 20 }}> {reviewArray}</div>
    </div>
  );
};

export default Reviews;
