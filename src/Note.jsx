import React from "react";

const Note = (props) => {
    const deleteNote=()=>{
        props.deleteItem(props.id);

    }
    return (
        <>
        <div className="main_div_node">
            <h2>{props.title}</h2>
            <br/>
            <p>{props.content}</p>
            <button className="but_node" onClick={deleteNote} type="button">⁕</button>
        </div>
        </>
    );
};
export default Note;
