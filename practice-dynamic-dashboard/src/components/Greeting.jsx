export default function Greeting() {
  const userName = "Alex";
  const element = <h1>Welcome, {userName}!</h1>;
  return <div> {element}</div>;
}
