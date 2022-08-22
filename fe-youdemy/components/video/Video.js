export default function Video(props) {
  return (
    <div className="individual-video-container">
      <div className="individual-video-cont">
        <img className="video-thumbnail" src={props.video.thumbnail} />
      </div>
      <div className="info-container">
        <h2>{props.video.title}</h2>
        <p>{props.video.description}</p>
      </div>
    </div>
  );
}
