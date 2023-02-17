import React, { useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [expend, setExpend] = useState(false);
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
        console.log(note);
    }
    const addNote=()=>{
        // event.preventDefault();
        props.passNote(note);
        setNote({ title: "",
        content: ""});
    }
    const expendIt=()=>{
        setExpend(true);
    }
    const notExpend=()=>{
        setExpend(false);
    }
    return (
        <>
            <div className="main_note" >
                <form onDoubleClick={notExpend}>
                    {expend?
                    <input type="text"
                        value={note.title}
                        name="title"
                        onChange={InputEvent}
                        placeholder="Title"
                        className="input"
                    />:null}
                    <textarea rows=""
                        column=""
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                        placeholder="Write a not..."
                        className="input"
                        onClick={expendIt}
                        
                        >
                        
                    </textarea>
                    {expend?
                    <button type="button" className="btn" onClick={addNote}>+</button>:null}
                </form>
            </div>
        </>
    );
};
export default CreateNote;
