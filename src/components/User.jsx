function User(props) {
  const user = props.user;
  return (
    <span className="user">
      <span className="name">{props.name}</span>
      <span className="handle">@{props.handle}</span>
    </span>
  );
}

export default User;
