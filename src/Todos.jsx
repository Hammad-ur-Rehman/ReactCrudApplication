import React from "react";

const Todos = ({ todos ,deleteTodo,setid }) => {
  return (
    <>
      <div className="container mt-5 text-center">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {todos.map((t) => {
                      const {id,title,description} = t

            return (
                
             <>
              
                <tbody key={id} >
                  <tr>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>
                      <button className="btn btn-warning mx-2" onClick={()=>setid(id)}>Edit</button>
                      <button onClick={()=>deleteTodo(id)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
                </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Todos;
