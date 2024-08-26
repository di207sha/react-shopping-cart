
export const Seriescard =(props)=>
{
    const {key,img_url,firstName,lastName,gender,rating}=props.curElem;
    return(<li key={key} className="card">
        <div>
         <div><img src={img_url} alter="no pic" height="40%" width="40%" /></div>
         <div className="card-content">
         <h1 >name:{firstName}</h1>
        <h>Rating :{lastName}</h>
        <p>para:{gender}</p>
        <h1>rating:<span className={`rating ${rating>=20?"superhit":"flop"}`}>{rating}</span></h1>
        <button>watch now</button>
        </div>
        </div>
        </li>);
}