import { useState, useEffect } from "react";

function AddForm({ formData, handleAdd }) {
    const [state, setState] = useState({ title: formData.title, completed: formData.completed, priority: formData.priority });

    const clearForm = function () {
        setState({ title: formData.title, completed: formData.completed, priority: formData.priority })
    }

    return (
        <div>
            <h3 className="center">ADD TODO FORM</h3>
            <form id="form-1" onSubmit={(e) => handleAdd(e, state)}>
                <div>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type={"text"}
                        name="title"
                        value={state.title}
                        onChange={(e) => setState((prevState) => {
                            console.log(e.target.value)
                            return { ...prevState, title: e.target.value }
                        })}
                        id="title" />
                </div>
                <div>
                    <label htmlFor="completed">COMPLETED</label>
                    <input
                        type="checkbox"
                        id="completed"
                        name="completed"
                        value={state.completed}
                        checked={state.completed}
                        onChange={(e) => setState((prevState) => {
                            console.log(e.target.value)
                            return {
                                ...prevState, completed: !prevState.completed
                            }
                        }
                        )} />
                </div>
                <div>
                    <label htmlFor="priority">PRIORITY</label>
                    <select name="priority" onChange={(e) => setState((prevState) => {
                        return { ...prevState, priority: e.target.value }
                    })} id="priority" value={state.priority}>
                        <option value={"one"}>1</option>
                        <option value={"two"}>2</option>
                        <option value={"three"}>3</option>
                    </select>
                </div>
                <button type="submit">SUBMIT</button>
                <button type="reset" onClick={clearForm}>RESET</button>
            </form>
        </div>
    );
}
export default AddForm;


