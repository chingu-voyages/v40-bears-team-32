import Course from "./Course.js";

const Courses = (props) => {
  const courseArray = props.courses.map((course) => {
    return <Course key={course.id} course={course} />;
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
      <h1 style={{ textAlign: "center" }}>Top Courses</h1>
      <div style={{ marginTop: 20 }}>{courseArray}</div>
    </div>
  );
};

export default Courses;
