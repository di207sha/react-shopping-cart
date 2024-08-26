import React from "react";
function Profile ()
{
    return(
        <>
        <Profilecard name="kajal" gender="female" age={21} 
        greeting={<h1>clever student</h1>}
        > 
        
            <p>hobbies:gaming,dancing</p>
            <button>watch now</button>
        
        </Profilecard>
        </>
    );
};
export default Profile;

const Profilecard=(props)=>
{
    return(
        <><h1>name:{props.name}</h1>
        <h1>gender:{props.gender}</h1>
        <h>age:{props.age}</h>
        <p> {props.greeting}</p>
        <div>{props.children}</div>
        </>
    );
};