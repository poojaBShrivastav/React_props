import logo from './logo.svg';
import './App.css';
import data from "./Shoes_data"
import CardComponent from "./CardComponent"

function App() {
  return (
    <div>
      
    <h1>Photos</h1>
   <div className='cart_cont'>
     {
       data.map(function(item){
         return(
           <CardComponent data={item}/>
         )
       })
     }
   </div>
 </div>
  );
}

export default App;
