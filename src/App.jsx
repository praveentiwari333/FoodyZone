import FoodCardContainer from "./FoodCardContainer";
import {useEffect,useState} from "react";
import "./TopContainer.css";
import "./FilterContainer.css";
import "./Form.css";

const  BASE_URL=[
  {
   name: "Boilded Egg",
   price: 10,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://dieteticdirections.com/wp-content/uploads/2021/04/eggs-hard-735x735.jpeg",
   type: "breakfast"
  },
  {
   name: "RAMEN",
   price: 25,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://www.kikkoman.eu/fileadmin/_processed_/b/e/csm_1101-recipe-page-Authentic-Japanese-soy-sauce-ramen_mobile_c83e83c70c.webp",
   type: "lunch"
  },
  {
   name: "GRILLED CHICKEN",
   price: 45,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://www.kingsford.com/wp-content/uploads/2023/05/Bangladesh-Grilled-Chicken-165_cc1_00000000_desktop2x.jpg",
   type : "dinner"
  },
  {
   name: "CAKE",
   price: 18,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg",
   type: "breakfast"
  },
  {
   name: "BURGER",
   price: 23,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
   type: "lunch"
  },
  {
   name: "PANCAKE",
   price: 25,
   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
   image: "https://www.chelsea.co.nz/hubfs/New%20Recipe%20images/Sunday%20Pancakes%20Recipe%20NZ%20Chelsea%20Sugar.jpg",
   type : "dinner"
  }
  ];


export default function App(){
  const [data,setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [selectedBtn,setSelectedBtn]=useState("");
  
useEffect(()=>{
  const fetchFoodData = ()=>{
    try{
      setLoading(true);
      setData(BASE_URL);
      setFilteredData(BASE_URL);
      setLoading(false);
    }catch(error){
      setError("Unable to fetch data");
    }
}
    fetchFoodData();
},[]);


  const filterFood=(type)=>{
    if(type=="all"){
      setFilteredData(data);
      setSelectedBtn(type);
      return;
    }
      
    const filter = data?.filter((food)=>
      food.type.toLowerCase().includes(type.toLowerCase())
  ) 
  setFilteredData(filter);
  setSelectedBtn(type);
  }

  
if(error)   return <div>{error}</div>
if(loading) return <div>loading....</div>

 const searchFood=(e)=>{
  const searchValue= e.target.value;

  if(searchValue==" "){
    setFilteredData(null);
  }

  const filter = data?.filter((food)=>
  food.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredData(filter);
}


 
//  const handleSubmit=(e)=>{
//    e.preventDefault();
//  }

   return(
    <>
<div className="top">
<div className="logo">
    <img src="/Foody Zone@2x.png" alt="logo"></img>
    </div>    
      <input className="search"
      placeholder="Search Food"
      onChange={searchFood}></input>
</div>   
<div className="bottom">
<div className="buttons">
<button onClick={()=>filterFood("all")} 
style={(selectedBtn=="all")?{backgroundColor:"green",outline:'1px solid white'}: {backgroundColor:"red"}}>All</button>
<button onClick={()=>filterFood("breakfast")} 
style={(selectedBtn=="breakfast")?{backgroundColor:"green",outline:'1px solid white'}: {backgroundColor:"red"}}>Breakfast</button>
<button onClick={()=>filterFood("lunch")} 
style={(selectedBtn=="lunch")?{backgroundColor:"green",outline:'1px solid white'}: {backgroundColor:"red"}}>Lunch</button>
<button onClick={()=>filterFood("dinner")} 
style={(selectedBtn=="dinner")?{backgroundColor:"green",outline:'1px solid white'}: {backgroundColor:"red"}}>Dinner</button>
</div>
</div>
<FoodCardContainer data={filteredData}/>
</>
  )
}   



     
    
     
      
   



 

 

  


