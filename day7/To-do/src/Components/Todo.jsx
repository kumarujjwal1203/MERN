// import { useState } from "react";

// export default function Todo() {
//   const [input, setInput] = useState("");
//   const [todo, setTodo] = useState([]);
//   const [editIndex, setEditIndex] = useState(null); // track the index of the task being edited
//   const [completed, setCompleted] = useState([]); // track completed tasks (by index)

//   function onInputChange(event) {
//     setInput(event.target.value);
//   }

//   function onAdd() {
//     if (input.trim() === "") return;

//     if (editIndex !== null) {
//       // Edit existing task
//       const updatedTodo = [...todo];
//       updatedTodo[editIndex] = input;
//       setTodo(updatedTodo);
//       setEditIndex(null);
//     } else {
//       // Add new task
//       setTodo([...todo, input]);
//     }

//     setInput("");
//   }

//   function onDelete(index) {
//     setTodo(todo.filter((_, i) => i !== index));
//     setCompleted(completed.filter((i) => i !== index));
//   }

//   function onEdit(index) {
//     setInput(todo[index]);
//     setEditIndex(index);
//   }

//   function onToggleComplete(index) {
//     if (completed.includes(index)) {
//       setCompleted(completed.filter((i) => i !== index));
//     } else {
//       setCompleted([...completed, index]);
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-dark">ToDo</h1>
//       <input
//         type="text"
//         placeholder="Add a task"
//         onChange={onInputChange}
//         value={input}
//       />
//       <button onClick={onAdd}>{editIndex !== null ? "Update" : "Add"}</button>
//       <ul>
//         {todo.map((task, index) => (
//           <li
//             key={index}
//             className="text-dark"
//             style={{ marginBottom: "10px" }}
//           >
//             <input
//               type="checkbox"
//               checked={completed.includes(index)}
//               onChange={() => onToggleComplete(index)}
//               style={{ marginRight: "10px" }}
//             />
//             <span
//               style={{
//                 textDecoration: completed.includes(index)
//                   ? "line-through"
//                   : "none",
//                 marginRight: "10px",
//               }}
//             >
//               {task}
//             </span>
//             <button
//               onClick={() => onEdit(index)}
//               style={{ marginRight: "5px" }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(index)}
//               style={{
//                 color: "black",
//                 backgroundColor: "red",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`/todos/${userId}`).then((res) => setTodo(res.data));
  }, [userId]);

  const onAdd = async () => {
    if (input.trim() === "") return;

    if (editId) {
      const updated = await axios.put(`/todos/${editId}`, {
        task: input,
        completed: false,
      });
      setTodo(todo.map((t) => (t._id === editId ? updated.data : t)));
      setEditId(null);
    } else {
      const res = await axios.post("/todos", { task: input, userId });
      setTodo([...todo, res.data]);
    }
    setInput("");
  };

  const onDelete = async (id) => {
    await axios.delete(`/todos/${id}`);
    setTodo(todo.filter((t) => t._id !== id));
  };

  const onEdit = (task) => {
    setInput(task.task);
    setEditId(task._id);
  };

  const onToggleComplete = async (task) => {
    const updated = await axios.put(`/todos/${task._id}`, {
      task: task.task,
      completed: !task.completed,
    });
    setTodo(todo.map((t) => (t._id === task._id ? updated.data : t)));
  };

  return (
    <div>
      <h1>ToDo</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onAdd}>{editId ? "Update" : "Add"}</button>
      <ul>
        {todo.map((task) => (
          <li key={task._id} style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task)}
              style={{ marginRight: "10px" }}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {task.task}
            </span>
            <button onClick={() => onEdit(task)} style={{ marginRight: "5px" }}>
              Edit
            </button>
            <button
              onClick={() => onDelete(task._id)}
              style={{ color: "black", backgroundColor: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
