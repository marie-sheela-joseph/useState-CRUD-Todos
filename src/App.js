import { useState } from "react";
import EditForm from "./EditForm";
import Table from "./Table";
import AddForm from "./AddForm";
import "./App.css";

function App() {
  const [state, setState] = useState({ todos: [], formData: { id: 0, title: "", completed: false, priority: "one" }, showEditForm: false, editId: 0 });

  const handleAdd = function (e, formData) {
    e.preventDefault();
    setState((prevState) => { return { ...prevState, todos: [...prevState.todos, { ...formData, id: prevState.todos.length === 0 ? 1 : prevState.todos.slice(-1)[0].id + 1 }] } })
  }
  const handleDelete = function (id) {
    setState((prevState) => { return { ...prevState, todos: prevState.todos.filter((todo) => todo.id !== id) } })
  }
  const loadEditForm = function (id) {
    setState((prevState) => { return { ...prevState, showEditForm: true, editId: id } })
  }
  const handleEdit = function (newTodo) {
    setState((prevState) => {
      console.log("hiding edit");
      return { ...prevState, todos: prevState.todos.map((todo) => { return todo.id === prevState.editId ? newTodo : todo }), showEditForm: false, editId: 0 }
    })
  }
  return (
    <div>
      <h1 className="center">TODOS - CREATE, READ, UPDATE, DELETE - useState</h1>
      <AddForm formData={state.formData} handleAdd={handleAdd} />
      {state.showEditForm ? <EditForm todo={state.todos.find((x) => x.id === state.editId)} handleEdit={handleEdit} /> : null}
      <Table todos={state.todos} handleDelete={handleDelete} loadEditForm={loadEditForm} />
    </div>
  );
}
export default App;