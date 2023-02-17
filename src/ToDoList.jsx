import React from "react";
const ToDoList = (props) => {

    return (
        <>
            <div className="todo_style">
                <i className="fa-times" 
                aria-hidden="true" 
                onClick={()=>{
                    return props.onSelect(props.id);
                }}>_</i>
                <li>{props.text}</li>
            </div>

        </>
    );

}
export default ToDoList;
