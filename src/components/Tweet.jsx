import "./ProfileImage";
import "./User";
import "./Timestamp";
import "./Message";
import ProfileImage from "./ProfileImage";

function Tweet(props) {
  console.log(props);
  const name = props.tweet.user.name,
    image = props.tweet.user.image,
    handle = props.tweet.user.handle,
    timestamp = props.tweet.timestamp,
    message = props.tweet.message;

  return (
    <div className="tweet">
      <ProfileImage image={image} />
      {/* <img src={image} className="profile" alt="profile" /> */}

      <div className="body">
        <div className="top">
          {/* <span className="user"> */}
          <span User name={name} handle={handle} />
          {/* <span className="name">{name}</span>
            <span className="handle">{handle}</span> */}

          {/* <span className="timestamp">{timestamp}</span> */}
          <span Timestamp time={timestamp} />
        </div>

        {/* <p className="message">{message}</p> */}
        <span Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
