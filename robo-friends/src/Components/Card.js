import React from "react";

const Card = (props)=> {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            <img src={`https://robohash.org/${props.id}?set=set4&size=200x200`} alt={`${props.id}`}></img>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
            </div>
        </div>
    )
}

export default Card;

