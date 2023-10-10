import "./ProfileImage";
import "./User";
import "./Timestamp";
import "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  console.log(props);
  // const name = props.tweet.user.name,
  //   image = props.tweet.user.image,
  //   handle = props.tweet.user.handle,
  //   timestamp = props.tweet.timestamp,
  //   message = props.tweet.message;

  return (
    <div className="tweet">
      <ProfileImage user={user} />
      {/* <img src={image} className="profile" alt="profile" /> */}

      <div className="body">
        <div className="top">
          {/* <span className="user"> */}
          <User User name={user.name} handle={user.handle} />
          {/* <span className="name">{name}</span> */}

          {/* <span className="timestamp">{timestamp}</span> */}
          <span Timestamp time={timestamp} />
        </div>

        {/* <p className="message">{message}</p> */}
        <span Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
