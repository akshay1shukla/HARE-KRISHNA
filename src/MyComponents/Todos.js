import React from 'react' 
import {Todo} from "./Todo";

export const Todos = (props) => {
   let myStyle = {
    borderRadius: "15px",
       minHeight: "40vh",
       margin: "40px auto",
       background: "linear-gradient(#83a4d4, #b6fbff)",
       border:"10px",
       borderStyle: "outset",
       borderColor:"grey",
       
   }
    return (
        <div className="container"  style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos to display!!":
            props.todos.map((todo)=>{
                return (
                    <>
                <Todo todo={todo} key={todo.snoo}  onDelete={props.onDelete}/> <hr/>
                </>)
                })}
            
        </div>
    )
}
