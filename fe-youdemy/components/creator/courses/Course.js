const Course = (props) => {
  return (
    <div
      style={{
        color: "#2BA7DC",
        background: "white",
        borderRadius: 30,
        padding: 20,
        margin: 20,
      }}
    >
      <h2>
        {props.course.name} - {props.course.level}
      </h2>
      <h1>{props.course.prerequisities}</h1>
      <p>{props.course.description}</p>
      <h3>{props.course.price}</h3>
    </div>
  );
};

export default Course;
