function ProfileCard({ name, role, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function Assignment1() {
  return (
    <div>
      <h1>Profile Cards</h1>
      <ProfileCard
        name="Aditi Poudel"
        role="React Student"
        description="I am learning React."
      />
    </div>
  );
}