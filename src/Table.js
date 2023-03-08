function Table({ todos, handleDelete, loadEditForm }) {
    return (
        <div>
            <table id="todo-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>COMPLETED</th>
                        <th>PRIORITY</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        let bgColor = todo.completed ? "bg-green" : "bg-red";
                        return <tr key={todo.id} className={bgColor}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{String(todo.completed)}</td>
                            <td>{todo.priority}</td>
                            <td><button onClick={() => handleDelete(todo.id)}>DELETE</button></td>
                            <td><button onClick={() => loadEditForm(todo.id)} >EDIT</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Table;
