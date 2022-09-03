import Video from "./Video.js";

const Videos = (props) => {
  const videoList = props.videos.map((video) => {
    return <Video key={video.id} video={video} />;
  });
  return <div>{videoList}</div>;
};

export default Videos;
