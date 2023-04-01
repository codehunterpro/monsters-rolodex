
import "./card.style.css";

const Card = (props) => {

const {id,name, email} = props.monster
    
       
        return (
            <div className="card-container" >
            <img
              alt={`monster-${name}`}
              src={`https://robohash.org/${id}?set=set2`}
            />
            <h1> {name}</h1>
            <p>{email}</p>
          </div>  
        )
    
}

export default Card;