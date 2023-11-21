import "./App.css";
import Form from "./form";
import Todos from "./Todos";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {

const [todos , settodos] = useState([
  {
     id:1,
    title:"This is brand new Title",
    description:"This is brand new Description"
  },
  {
    id:2,
    title:"This is brand new Title 2",
    description:"This is brand new Description 2"
  },
  {
    id:3,
    title:"This is brand new Title 3",
    description:"This is brand new Description 3."
  },

])


const [id , setid] = useState("");


console.log("This is id", id)

  
     const deleteTodo = (id) =>{

           
                 settodos(todos.filter((d)=>d.id !=id

                 ))


     }




     const deleteall = () => {

      console.log("Delete all", todos)
     settodos([]);

    }


  return (
    <>
    <div className="container">
      <h1 className="text-center mt-3">React Crud Application</h1>

   {/* <button onClick={deleteTodo(1)} className="btn btn-danger">Test</button> */}

      <Form  todos={todos} settodos={settodos} id={id} setid={setid} deleteall={deleteall}   />
      <Todos deleteTodo={deleteTodo}todos ={todos} setid={setid}/>
      </div>
    </>
  );
}

export default App;
