import "./FoodCards.css"
import { useState } from "react";

export default function FoodCards({food}){
   

    return(
            <div className="card">
              {food.map((item) => (
                <div key={item.name} className="food_top">
                    <div className="food_image">
                    <img src={item.image}></img>
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                        </div>
                          <button>${item.price.toFixed(2)}</button>
                    </div>
                </div>
          ))}                         
            </div>
    )
}