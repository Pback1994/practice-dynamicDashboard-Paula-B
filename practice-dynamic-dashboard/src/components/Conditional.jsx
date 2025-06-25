export default function Conditional() {
  let isPremiumMember = true;

  const message = (
    <h1>
      {isPremiumMember
        ? "Thank you for being a premium member!"
        : "Upgrade to premium to enjoy exclusive features!"}
    </h1>
  );

  return <div> {message}</div>;
}
