import FoodCards from "./FoodCards"
import "./FoodCardContainer.css"

export default function FoodCardContainer({data}){

    return(
        <div className="FoodCardContainer">
          <FoodCards food={data}/>    
      </div>
    )
}