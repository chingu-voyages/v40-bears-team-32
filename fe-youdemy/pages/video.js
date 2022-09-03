import Videos from "../components/video/Videos.js";

const videos = [
  {
    id: 1,
    title: "Video Title",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    description:
      "We've seen each of the individual pieces of a Redux app. Next, continue on to Part 2: Redux App Structure, where we'll look at a full working example to see how the pieces fit together.",
    url: "https://youtu.be/w31pC-A6V3c",
  },
  {
    id: 2,
    title: "Video Title",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    description:
      "We've seen each of the individual pieces of a Redux app. Next, continue on to Part 2: Redux App Structure, where we'll look at a full working example to see how the pieces fit together.",
    url: "https://youtu.be/2ddd70PMxTE",
  },
];

const VideoShow = () => {
  return (
    <div className="video-page-container">
      <h1>Title of the Course</h1>
      <div>Progress Bar Div</div>

      <img className="main-video" src={videos[0].thumbnail} alt="Main Video" />

      <div className="description-video-list">
        <div className="video-description">
          <h1>Title of Video</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="video-list">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoShow;
