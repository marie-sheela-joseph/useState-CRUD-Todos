import { useState } from "react";

function EditForm({ todo: { id, title, completed, priority }, handleEdit }) {
    const [todo, setTodo] = useState({ id: id, title: title, completed: completed, priority: priority });
    const handleSubmit = function (e) {
        e.preventDefault();
        handleEdit(todo);
    }
    return (
        <div>
            <h3 className="center">EDIT TODO FORM</h3>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <input
                    type={"text"}
                    value={todo.title}
                    onChange={(e) => setTodo((prevState) => { return { ...prevState, title: e.target.value } })} />
                <input
                    type={"checkbox"}
                    checked={todo.completed}
                    onChange={() => setTodo((prevState) => { return { ...prevState, completed: !prevState.completed } })} />
                <select value={todo.priority} onChange={(e) => setTodo((prevState) => { return { ...prevState, priority: e.target.value } })}>
                    <option value={"one"}>1</option>
                    <option value={"two"}>2</option>
                    <option value={"three"}>3</option>
                </select>
                <button>SAVE CHANGES</button>
            </form>
        </div>
    );
}
export default EditForm;