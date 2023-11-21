import React, { useEffect, useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todos from "./Todos";

const Form = ({ settodos , todos ,id ,setid,deleteall }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");


       const handlesubmit = (e) =>{

                     e.preventDefault()

                     const obj = {
                    
                       id:Math.random(),
                       title,
                       description

                     }

                     if(id){

                           updateById(id)
                            setid("");

                     }

                     else {
                      settodos([...todos,obj])

                     }
                     

                    
                     settitle("");
                     setdescription("");

       }


         useEffect(()=>{

                       if(id) {

                               const updatedata = todos.filter((t)=> t.id ===id);

                                         settitle(updatedata[0].title)
                                         setdescription(updatedata[0].description)


                       }



         },[id])


         const updateById = (id) =>{
          const obj = {
              title,
              description,
          }
          settodos((prevData)=>
          prevData.map((todo)=>todo.id === id ? {...todo,...obj}:todo))
         }


         
   

  return (

    <>
     <form onSubmit={handlesubmit}>
    <div
      className="container mt-5 text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="text" placeholder="Text" className="mx-2" value={title} onChange={(e)=>settitle(e.target.value)} />
      <input
        type="text"
        placeholder="Description"
        className="mx-2"
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
      />
          


{
                id && ( <button className='btn btn-warning'>Edit</button>)
               }
               {
                !id && ( <button className='btn btn-warning'>Add</button>)
               }

<button className="btn btn-danger mx-2 " onClick={()=>deleteall(todos)}>Delete All</button>
    </div>
    </form>



    </>
    
  );
};

export default Form;
