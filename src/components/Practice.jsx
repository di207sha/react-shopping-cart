import data from "../API/data.json";
import { Seriescard } from  '../components/list.jsx';

const Netflix =()=>{
    // const name= "disha";
    // const Rating="8.5";
    // const para="Lorem ipsusectetur adipisicing elit.duhugrfyuuyrgiuyiryiugdegkahi8ruhgijhwoiur8yy";
    // const age=15;
    // const sas="watch now";
    // if (sas<18)
    // {
    //   sas="you cant watch";
    // }
  
    // const myself=()=>{
    //   const red="my rules";
    //   return red;
    // }
    // if (age<18){
    return(
      <ul className=" grid grid-three-cols">
        {data.map((curElem) =>{
          return(
        <Seriescard key={curElem.id} curElem={curElem}/>);
        })}
       
       </ul>);
     
      
    // )}
    
      
  };
  export default Netflix;   //default export
  // export const Footer=()=>
  // {
  //   return (<h1>i am footer</h1>)
  // };