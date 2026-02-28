function UserCard({ name, age, profession }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

export default function Assignment2() {
  return (
    <div>
      <h1>User Cards</h1>

      <UserCard name="Aditi" age={20} profession="Student" />
      <UserCard name="Aasriti" age={24} profession="HR" />
      <UserCard name="Mandip" age={23} profession="CA" />
    </div>
  );
}