// @flow

type FunctionalComponent<Props> = (props:Props) => React$Element<*>|null;

type ProfileProps = {username:string, onEdit:Function}
function Profile(props:{username:string, onEdit:Function}) {
  return (
    <div>
      Your Username: {props.username}
      <button onClick={props.onEdit}>Edit Profile</button>
    </div>
  );
}

function logOnRender<FirstOrderProps>(FirstOrderComponent:FunctionalComponent<FirstOrderProps>):FunctionalComponent<FirstOrderProps> {
  return function NewComponent(firstOrderProps:FirstOrderProps) {
    console.log("Rendering with props:", firstOrderProps);
    return <FirstOrderComponent {...firstOrderProps}/>;
  }
}

const LoggedProfile = logOnRender(Profile);

const badProfile = (
  <LoggedProfile
    username={1234}
    onEdit={"not implemented yet"}
  />
);

const goodProfile = (
  <LoggedProfile
    username={"pcardune"}
    onEdit={() => console.log("not implemented yet")}
  />
);
