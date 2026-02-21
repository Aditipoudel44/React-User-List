 /* import ProfileCard from "./component/ProfileCard";
import profileIcon from "./assets/profile icon.png";
import "./App.css";
export default function App(){
  return(
    <div>
      <ProfileCard 
      name="Aditi Poudel"
      bio="I am currently studying React Basics"
      image={profileIcon}
      />
    </div>
  );
} */

import UsersList from "./component/UsersList";
function App() {
  return (
    <div>
      <UsersList />
    </div>
  );
}
export default App;