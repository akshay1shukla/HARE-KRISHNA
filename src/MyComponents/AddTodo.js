
import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    let addtodo= {
        borderRadius: "15px",
        background: "linear-gradient(#83a4d4, #b6fbff)",
        border:"10px",
        borderStyle: "outset",
        borderColor:"grey",
        
    }
    return (
        <div className="container my-3" style={addtodo}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
