export default function ProfileCard(props){
    return(
        <div className="card">
            <img src={props.image} alt={props.name} className="profile-img" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>    
    );
}
