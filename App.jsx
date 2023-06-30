import React from "react";
import {emojipedia} from "./emojipedia"
function Header()
{
    return(
    <div className="flex justify-center items-center ">
     <div className="bg-[#2ec2b0] flex justify-center items-center py-4 px-20 mt-10">
      <h1 className="text-white text-8xl font-bold font-header">emojipedia</h1>
     </div>
     </div>


    );
}

function createCard(content)
{
  return(
    <Card 
    key = {content.id}
    img={content.emoji}
    title ={content.name}
    desc = {content.meaning}

    />
  )
}

function Card(props)
{
  return(
    
    // <div className="hover:transition-all">
    <div className="hover:scale-125 bg-white h-96 w-3/4 mx-20 mt-20 mb-28 shadow-2xl">
    
    <p className="flex justify-center pt-8 text-4xl">{props.img}</p>
    <h1 className="flex justify-evenly font-serif text-[#2ec2b0] text-3xl pb-4 pt-6 text-center">{props.title}</h1>
    <p className="flex justify-center text-xl text-clip text-center font-cuteness px-4  font-bold">{props.desc}</p>
    

    </div>
    // </div>
    

  );

}
function App() {
  return(
    <div className="bg-background h-full">

    <Header />
    {/* <Card/> */}
    <div className="grid grid-cols-3 grid-rows-3">
    {emojipedia.map(createCard)}
    </div>
    
      
    </div>
  );
  
}

export default App;
