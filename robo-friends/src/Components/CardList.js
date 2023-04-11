import React from "react";
import Card from "./Card"

const CardList = ({ robots }) =>{
  // if(true){
  //   throw new Error ("no thanks")
  // }
  const cardComponent = robots.map((robot,i) => 
    {
      return (
        <Card 
          key={i}
          name = {robots[i].name} 
          id = {robots[i].id} 
          email = {robots[i].email} 
        />
      )
    }
  )

  return (
    <>
      {cardComponent}
    </>
  )
}

export default CardList;